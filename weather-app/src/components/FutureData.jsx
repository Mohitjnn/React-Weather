// import Weather from "./Icons";

const FutureData = ({ data }) => {
  return (
    <div className=" flex flex-col mx-2 weatherCard justify-center p-3.5">
      {/* <Weather weather={data.weather}></Weather> */}
      <h1 className="mt-4 font font-light text-4xl">
        <span>{data.day.mintemp_c}°</span>/<span>{data.day.maxtemp_c}°</span>
      </h1>
      <h1 className="mt-4 font font-black darkerColor">{data.dayOfWeek}</h1>
    </div>
  );
};

export default FutureData;
