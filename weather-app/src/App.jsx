import Header from "./components/Header";
import Icons from "./components/Icons";
import "./App.css";
import Temp from "./components/Temp";
import Extra from "./components/Extra";
import FutureData from "./components/FutureData";
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
  return (
    <center className="h-screen flex items-center justify-center flex-col ">
      <Header />
      <section className="w-full flex flex-row items-center justify-evenly my-5">
        <Icons weather={"rainy"} /> <Temp></Temp> <Extra></Extra>
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
