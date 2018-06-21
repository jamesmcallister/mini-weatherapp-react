import React from "react";

function Photo(props) {
  return (
    <figure className="photo">
      <img src={props.data.image} alt="" />
    </figure>
  );
}

export default Photo;
