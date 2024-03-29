const API_BASE_URL = "https://api.weatherapi.com/v1";

export interface Weather {
  location: Location;
  current: Current;
}
export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}
export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Search {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export async function getWeatherByCity(city: string) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/current.json?q=${city}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      console.log("API Error");
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchCityName(city: string) {
  try {
    if (city.length > 2) {
      const response = await fetch(
        `${API_BASE_URL}/search.json?q=${city}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        console.log("API Error");
        return null;
      }
      const data = await response.json();
      return data;
    } else return null;
  } catch (error) {
    console.log(error);
  }
}
