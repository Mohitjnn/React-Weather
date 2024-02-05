import Header from "./components/Header";
import Icons from "./components/Icons";
import "./App.css";
import Temp from "./components/Temp";
import Extra from "./components/Extra";

function App() {
  return (
    <center className="h-screen flex items-center justify-center flex-col">
      <Header />
      <section className="w-full flex flex-row items-center justify-evenly my-5">
        <Icons weather={"rainy"} /> <Temp></Temp> <Extra></Extra>
      </section>
    </center>
  );
}

export default App;
