"use client";
import Search from "@/components/Search/Search";
import { imageList } from "@/data/imageList";
import { Weather, getWeatherByCity } from "@/queries/apiClient";
import { Clock4, MapPin, Thermometer } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);

  const handleClick = async () => {
    // console.log(city);
    const data: Weather = await getWeatherByCity(city);
    // console.log(data);
    if (data) {
      setWeather(data);
    }
  };

  return (
    <>
      <Search setCity={setCity} city={city} handleClick={handleClick} />
      {weather && (
        <div className="max-w-[900px] w-full flex flex-col gap-5 justify-center items-center">
          <div className="w-[80%] flex justify-center items-center border border-bg-foreground rounded-md shadow-xl">
            <div className="w-full p-4 flex flex-col justify-start items-start gap-2">
              <div className="flex gap-4 w-full">
                <div className="flex flex-col flex-1">
                  <div className="flex justify-start items-baseline gap-4">
                    <p className="font-bold text-3xl">
                      {weather.location.name}
                    </p>
                  </div>
                  <p className="font-bold text-xl flex-1">
                    {weather.location.country} {weather.location.region}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    ({weather.location.lat},{weather.location.lon})
                  </p>
                </div>
                {/* Degree  */}
                <div className="text-4xl flex flex-col justify-end items-end min-w-1/2 max-w-fit">
                  <div className="flex justify-center items-center">
                    <p>{weather.current.feelslike_c}</p>
                    <Image
                      src={"/images/celsius.svg"}
                      height={40}
                      width={40}
                      alt="C"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <p>{weather.current.feelslike_f}</p>
                    <Image
                      src={"/images/fahrenheit.svg"}
                      height={40}
                      width={40}
                      alt="F"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col w-full h-full">
                  <div className="flex justify-start items-center gap-2">
                    <Thermometer size={15} />
                    <span className="text-xl">
                      {weather.current.condition.text}
                    </span>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <Clock4 size={15} />
                    <span className="text-muted-foreground">
                      {weather.location.localtime}
                    </span>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <MapPin size={15} />
                    <span className="text-muted-foreground">
                      {weather.location.region}, {weather.location.tz_id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-1/3">
              <Image
                src={
                  "/images/" +
                  imageList.find(
                    (image) => image.code === weather.current.condition.code
                  )!.src +
                  ".svg"
                }
                height={200}
                width={200}
                alt={weather.current.condition.text}
              />
            </div>
          </div>
          <div className="w-[80%] flex items-center border border-bg-foreground rounded-md shadow-xl gap-2 justify-evenly py-4">
            <div className="flex">
              <Image
                height={50}
                width={50}
                src={"/images/windsock.svg"}
                alt="Wind"
              />
              <div>
                <p className="font-bold">Wind Speed</p>
                <p>{weather.current.gust_mph} mph</p>
              </div>
            </div>
            <div className="flex">
              <Image
                height={50}
                width={50}
                src={"/images/humidity.svg"}
                alt="Humidity"
              />
              <div>
                <p className="font-bold">Humidity</p>
                <p>{weather.current.humidity} %</p>
              </div>
            </div>
            <div className="flex">
              <Image
                height={50}
                width={50}
                src={"/images/barometer.svg"}
                alt="Pressure"
              />
              <div>
                <p className="font-bold">Pressure</p>
                <p>{weather.current.pressure_mb} mb</p>
              </div>
            </div>
            <div className="flex">
              <Image
                height={50}
                width={50}
                src={"/images/compass.svg"}
                alt="Wind Direction"
              />
              <div>
                <p className="font-bold">Wind Direction</p>
                <p>{weather.current.wind_dir}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
