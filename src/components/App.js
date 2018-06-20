import React from "react";
import Photo from "./Photo";
import Info from "./Info";
import Thumbs from "./Thumbs";
import Search from "./Search";
import Header from "./Header";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentWeather: {
        location: "",
        description: "",
        temp: {
          current: "",
          min: "",
          max: ""
        }
      }
    };

    // Use the props passed to App here (hint: look at ../index.js)
  }
  componentDidMount() {
    const { apiKey, city, url } = this.props.config.api.weather;
    fetch(`${url}?q=${city}&APPID=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        return {
          location: data.name,
          description: data.weather[0].description,
          temp: {
            current: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max
          }
        };
      })
      .then(reply => this.setState({ currentWeather: reply }))
      .catch(console.log);
  }
  render() {
    console.log(this.state);
    return (
      <main className="content">
        <Header />
        <Photo />
        <Info
          description={this.state.currentWeather.description}
          temp={this.state.currentWeather.temp}
        />
        <Thumbs />
        <Search />
      </main>
    );
  }
}

App.defaultProps = {};

export default App;
