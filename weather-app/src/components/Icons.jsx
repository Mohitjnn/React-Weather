import { useEffect, useState } from "react";

const Weather = ({ info }) => {
  const [image, setImage] = useState(null);

  const iconsUrl = "WeatherIcons.json";
  useEffect(() => {
    fetch(iconsUrl)
      .then((res) => res.json())
      .then((data) => {
        const img = data.filter((iconImage) => {
          return iconImage.code === info.currentCode;
        });

        if (info.currentDay) {
          setImage(img[0].day);
        } else {
          setImage(img[0].night);
        }
      }),
      [];
  });

  return (
    <img src={image} alt="this is the image" className="h-40 translate-x-9" />
  );
};

export default Weather;
