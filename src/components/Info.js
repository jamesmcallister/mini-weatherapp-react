import React from "react";

export default function Info(props) {
  return (
    <div className="info">
      <p className="info__item info__item--conditions">
        {" "}
        {props.description} is currtly {props.temp ? props.temp.current : null}{" "}
        max
      </p>
      <p className="info__item info__item--credits">
        <a href="#"> James&Rafal </a>
        <span> on </span>
        <a href="#"> Unsplash </a>
      </p>
    </div>
  );
}
