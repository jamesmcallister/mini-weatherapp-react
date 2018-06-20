import React from "react";

export default function Info(props) {
  return (
    <div className="info">
      <p className="info__item info__item--conditions"> light rain</p>
      <p className="info__item info__item--credits">
        <a href="#"> James&Rafal </a>
        <span> on </span>
        <a href="#"> Unsplash </a>
      </p>
    </div>
  );
}
