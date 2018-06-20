import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const config = {
  api: {
    weather: {
      apiKey: "c35ab95f79543c0b61bd103e6727ff56",
      city: "London",
      url: "https://api.openweathermap.org/data/2.5/weather"
    },
    unsplash: {
      apiKey: "YOUR_API_KEY",
      url: "https://api.unsplash.com/search/photos"
    }
  }
};

ReactDOM.render(<App config={config} />, document.getElementById("⚛️"));
