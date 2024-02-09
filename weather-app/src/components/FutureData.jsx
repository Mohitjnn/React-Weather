// import Weather from "./Icons";

const FutureData = ({ data }) => {
  return (
    <div className=" flex flex-col mx-2 weatherCard justify-center p-3.5">
      {/* <Weather weather={data.weather}></Weather> */}
      <h1 className="mt-4 font font-light text-4xl">
        <span>{data.mintemp}</span>/<span>{data.maxtemp}</span>
      </h1>
      <h1 className="mt-4 font font-black darkerColor">{data.day}</h1>
    </div>
  );
};

export default FutureData;
