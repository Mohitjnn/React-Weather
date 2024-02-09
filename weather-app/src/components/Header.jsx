import { useRef } from "react";

const Header = ({ info, setCityName }) => {
  const cityNameRef = useRef("");

  const handleChangeAndSize = (event) => {
    const target = event.target;
    target.style.width = "10px";
    target.style.width = `${target.scrollWidth}px`;
    cityNameRef.current = event.target.value;
  };

  const inputAssigning = () => {
    setCityName(cityNameRef.current);
  };

  const handleKeyDown = (e) =>
    e.key === "Enter" && setCityName(cityNameRef.current);

  return (
    <header className="w-full flex flex-row items-center justify-center ">
      {" "}
      <p className="text-6xl font font-thin" style={{ color: "#b4b4b4" }}>
        The weather in
      </p>
      <input
        type="text"
        className="input"
        onChange={handleChangeAndSize}
        onBlur={inputAssigning}
        onKeyDown={handleKeyDown}
        defaultValue="Mumbai"
      />
      <p className=" text-6xl font font-thin" style={{ color: "#b4b4b4" }}>
        is {info.currentCondition}
      </p>
    </header>
  );
};

export default Header;
