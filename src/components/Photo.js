import React from "react";

function Photo(props) {
  return (
    <figure
      className="photo"
      style={{ backgroundColor: `${props.data.color}` }}
    >
      <img src={props.data.image} alt="" />
    </figure>
  );
}

export default Photo;
