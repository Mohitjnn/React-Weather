import "./Icons.css";

const Weather = ({ weather }) => {
  if (weather === "sun-shower") {
    return (
      <div className="icon sun-shower">
        <div className="cloud"></div>
        <div className="sun">
          <div className="rays"></div>
        </div>
        <div className="rain"></div>
      </div>
    );
  } else if (weather === "thunder-storm") {
    return (
      <div className="icon thunder-storm">
        <div className="cloud"></div>
        <div className="lightning">
          <div className="bolt"></div>
          <div className="bolt"></div>
        </div>
      </div>
    );
  } else if (weather === "cloudy") {
    return (
      <div className="icon cloudy">
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
    );
  } else if (weather === "flurries") {
    return (
      <div className="icon flurries">
        <div className="cloud"></div>
        <div className="snow">
          <div className="flake"></div>
          <div className="flake"></div>
        </div>
      </div>
    );
  } else if (weather === "sunny") {
    return (
      <div className="icon sunny">
        <div className="sun">
          <div className="rays"></div>
        </div>
      </div>
    );
  } else if (weather === "rainy") {
    return (
      <div className="icon rainy">
        <div className="cloud"></div>
        <div className="rain"></div>
      </div>
    );
  }
};

export default Weather;
