"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
  setCity: Dispatch<SetStateAction<string>>;
  city: string;
  handleClick: () => void;
};

const Search = (props: Props) => {
  return (
    <div className="max-w-[900px] w-full h-28 flex justify-center items-center gap-4">
      <div className="flex w-[80%] justify-center items-start gap-2">
        <label className="w-full">
          <Input
            placeholder="Enter City Name"
            className="p-2 shadow-lg"
            value={props.city}
            onChange={(e) => props.setCity(e.target.value)}
          />
        </label>
        <Button onClick={props.handleClick} variant={"default"}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
