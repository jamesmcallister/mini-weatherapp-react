import React from "react";

function convertToCel(temp){
    return Math.round(temp -273.15);
}

export default function Info(props) {
  return (
    <div className="info">
      <p className="info__item info__item--conditions">
        {props.description} in {props.currentCity}, current temperature is {convertToCel (props.temp.current)}°C

      </p>
      <p className="info__item info__item--credits">
        <a href="#"> James&Rafal </a>
        <span> on </span>
        <a href="#"> Unsplash </a>
      </p>
    </div>
  );
}
