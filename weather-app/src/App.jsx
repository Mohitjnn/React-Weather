import Header from "./components/Header";
import Icons from "./components/Icons";
import "./App.css";
import Temp from "./components/Temp";
import Extra from "./components/Extra";
import FutureData from "./components/FutureData";
import { useCallback, useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

function App() {
  const [info, setInfo] = useState({});
  const [cityName, setCityName] = useState("Mumbai");
  const [FutureWeatherData, setFutureWeatherData] = useState([]);

  const FutureWeatherDataArray = [];

  let WeatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=86558995328942b6a75203232240302&q=${cityName}&days=5&aqi=no&alerts=no`;

  const tomorrow = dayjs().add(1, "day");

  useMemo(() => {
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

        for (let index = 1; index < 5; index++) {
          const item = data.forecast.forecastday[index];

          const modifiedItem = {
            ...item,
            dayOfWeek: tomorrow.add(index - 1, "day").format("ddd"),
          };

          FutureWeatherDataArray.push(modifiedItem);
        }
        setFutureWeatherData(FutureWeatherDataArray);
      })
      .catch((error) => console.log("Error:" + error));
  }, [cityName]);

  return (
    <center className="h-screen flex items-center justify-center flex-col ">
      <Header info={info} setCityName={setCityName} />
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
