"use client";
import Search from "@/components/Search/Search";
import { Weather, getWeatherByCity } from "@/queries/apiClient";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);

  const handleClick = async () => {
    console.log(city);
    const data: Weather = await getWeatherByCity(city);
    console.log(data);
    if (data) {
      setWeather(data);
    }
  };

  return (
    <>
      <Search setCity={setCity} city={city} handleClick={handleClick} />
      {weather && (
        <div className="max-w-[900px] w-full flex justify-center items-center">
          <div className="w-[80%] flex justify-center items-center border border-bg-foreground rounded-md shadow-xl">
            <div className="w-full p-2 flex flex-col justify-start items-start">
              <span>
                Location - {weather.location.name},{weather.location.country}{" "}
                {weather.location.region} ({weather.location.lat} lat,
                {weather.location.lon} lon)
              </span>
              <span>
                Region - {weather.location.region} {weather.location.tz_id}
              </span>
              <span>Time - {weather.location.localtime}</span>
              <span>
                Temperature - {weather.current.feelslike_c}C (
                {weather.current.feelslike_f})F
              </span>
              <span>Humidity - {weather.current.humidity}%</span>
              <span>
                Wind - {weather.current.wind_kph}kph/{weather.current.wind_mph}
                mph
              </span>
              <span>Direction - {weather.current.wind_dir}</span>
            </div>
            <div className="flex p-4 justify-center items-center">
              <Image
                src={"https:" + weather.current.condition.icon}
                height={200}
                width={200}
                alt={weather.current.condition.text}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
