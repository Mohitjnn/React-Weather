const Temp = ({ info }) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <section className="text-8xl font-thin ">{info.currentTemp}</section>
      <section className="textColor text-xl">
        {info.minTemp}°/{info.maxTemp}°
      </section>
    </section>
  );
};

export default Temp;
