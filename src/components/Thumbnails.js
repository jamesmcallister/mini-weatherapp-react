import React from "react";

export default function Thumbnails(props) {
  return (
    <a href={props.data.image}
      className="thumbs__link active"
      onClick={(event) => props.handleClick(event, props.data)}
      >
      <img
        src={props.data.thumb}
        alt={props.data.description}
        className="thumbs__link__img"
      />
    </a>
  );
}
