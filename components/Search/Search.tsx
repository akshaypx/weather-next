"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, getSearchCityName } from "@/queries/apiClient";

type Props = {
  setCity: Dispatch<SetStateAction<string>>;
  city: string;
  handleClick: () => void;
};

const Search = (props: Props) => {
  const [inputValue, setInputValue] = React.useState("");
  const [cityNames, setCityNames] = React.useState<Search[]>([]);
  const [showSuggestion, setShowSuggestion] = React.useState<boolean>(false);

  const fetchSearchCityNames = async (name: string) => {
    const response = await getSearchCityName(name);
    if (response) {
      setCityNames(response);
    } else {
      setCityNames([]);
    }
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      props.setCity(inputValue);
      console.log(inputValue);
      fetchSearchCityNames(inputValue);
      setShowSuggestion(true);
    }, 1000);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue, 1000]);

  const handleClick = () => {
    props.handleClick();
    setShowSuggestion(false);
  };

  return (
    <>
      <div className="max-w-[900px] w-full py-10 flex justify-center items-center gap-4">
        <div className="flex w-[80%] justify-center items-start gap-2">
          <label className="w-full">
            <Input
              name="city"
              placeholder="Enter City Name"
              className="p-2 shadow-lg"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {showSuggestion && cityNames.length > 0 && (
              <div className="border border-primary-foreground p-1 border-t-0 rounded-md rounded-tl-none rounded-tr-none flex flex-col gap-1">
                {cityNames.map((city) => (
                  <option
                    value={city.name}
                    className="hover:bg-primary-foreground p-2 border border-primary-foreground rounded-md text-muted-foreground"
                    onClick={() => {
                      props.setCity(city.name);
                      setInputValue(city.name);
                      handleClick();
                    }}
                  >
                    {(city.name + ", " + city.country).length > 45
                      ? (city.name + ", " + city.country).substring(0, 45) +
                        "..."
                      : city.name + ", " + city.country}
                  </option>
                ))}
              </div>
            )}
          </label>
          <Button onClick={handleClick} variant={"default"}>
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default Search;
