import Header from "./components/Header";
import Icons from "./components/Icons";
import "./App.css";
import Temp from "./components/Temp";
import Extra from "./components/Extra";
import FutureData from "./components/FutureData";
import { useEffect, useState } from "react";
function App() {
  let FutureWeatherData = [
    {
      weather: "sun-shower",
      mintemp: "-20°",
      maxtemp: "20°",
      day: "Tom",
    },
    {
      weather: "thunder-storm",
      mintemp: "-10°",
      maxtemp: "25°",
      day: "Fri",
    },
    {
      weather: "flurries",
      mintemp: "-14°",
      maxtemp: "33°",
      day: "Sat",
    },
    {
      weather: "sunny",
      mintemp: "-30°",
      maxtemp: "46°",
      day: "Sun",
    },
  ];

  const [info, setInfo] = useState({});
  let WeatherUrl =
    "http://api.weatherapi.com/v1/forecast.json?key=86558995328942b6a75203232240302&q=Mumbai&days=5&aqi=no&alerts=no";

  fetch(WeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      setInfo(() => {
        return {
          currentTemp: data.current.temp_c,
          currentCode: data.current.condition.code,
          currentCondition: data.current.condition.text,
          currentDay: data.current.is_day,
          minTemp: data.forecast.forecastday[0].day.mintemp_c,
          maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
          maxWind: data.forecast.forecastday[0].day.maxwind_kph,
          rainChance: data.forecast.forecastday[0].day.daily_will_it_rain,
          humidity: data.forecast.forecastday[0].day.avghumidity,
        };
      });
    })
    .catch((error) => console.log("Error:" + error));

  return (
    <center className="h-screen flex items-center justify-center flex-col ">
      <Header info={info} />
      <section className="w-full flex flex-row items-center justify-evenly my-5">
        <Icons info={info} /> <Temp info={info}></Temp>{" "}
        <Extra info={info}></Extra>
      </section>
      <section className="w-full flex flex-row items-center justify-center mt-15">
        {FutureWeatherData.map((data) => {
          return <FutureData data={data}></FutureData>;
        })}
      </section>
    </center>
  );
}

export default App;
