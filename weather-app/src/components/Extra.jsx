import { PiWind } from "react-icons/pi";
import { BsUmbrellaFill } from "react-icons/bs";
import { FiDroplet } from "react-icons/fi";

const Extra = ({ info }) => {
  return (
    <section className="grid grid-cols-2 grid-rows-3 gap-2 text-left textColor">
      <PiWind className="text-3xl my-auto"></PiWind>
      <section className="textColor">
        <span className="text-5xl darkerColor">{info.maxWind}</span>
        <span className="text-xl">Km/h</span>
      </section>
      <BsUmbrellaFill className="text-3xl my-auto"></BsUmbrellaFill>
      <section>
        <span className="text-5xl darkerColor">{info.rainChance}</span>
        <span className="text-xl">%</span>
      </section>
      <FiDroplet className="text-3xl my-auto"></FiDroplet>
      <section>
        <span className="text-5xl darkerColor">{info.humidity}</span>
        <span className="text-xl">% </span>
      </section>
    </section>
  );
};

export default Extra;
