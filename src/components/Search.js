import React from "react";

export default function Search(props) {
  return (
    <div className="controls">
      <form className="search">
        <label className="search__label">City</label>
        <input
          className="search__input"
          name="city"
          placeholder="Enter city name"
          autoComplete="city"
        />
        <button className="btn search__btn"> Go </button>
      </form>
    </div>
  );
}
