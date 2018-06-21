import React from "react";
import Thumbnails from "./Thumbnails";

export default function Thumbs(props) {

  return (
    <div className="thumbs">
      {props.photos.map(function(thumb){
          return <Thumbnails key={thumb.id} data={thumb} handleClick={props.handleClick}/>
          }
        )
      }

    </div>
  );
}
