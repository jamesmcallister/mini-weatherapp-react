import React from "react";

function Search (props){
    return (
      <div className="controls">
        <form
          className="search"
          onSubmit={props.handleSubmit}
          >
          <label className="search__label">City</label>
          <input
            onChange={props.handleChange}
            value={props.currentCity}
            className="search__input"
            name="city"
            placeholder="Enter city name"
            autoComplete="city"
          />
          <button className="btn search__btn"> Go </button>
        </form>
      </div>
    );
  };

export default Search;
