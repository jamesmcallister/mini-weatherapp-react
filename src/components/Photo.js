import React from "react";

function Photo(props) {
  return (
    <figure className="photo">
      <img src={props.backgroundUrl} alt="" />
    </figure>
  );
}

export default Photo;
