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
      currentTypeCity: "",
      currentCity: "London",
      currentWeather: {
        location: "",
        description: "",
        temp: {
          current: "",
          min: "",
          max: ""
        }
      },
      currentCityImages: [],
      currentBackground: {
        id: "",
        description: "",
        color: "",
        user: {
          name: "",
          url: ""
        },
        image:
          "https://images.unsplash.com/photo-1508711046474-2f4c2d3d30ca?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI4ODk1fQ&s=fd58555505fbe94b05eb33ec5874fc5d"
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveCity = this.receiveCity.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getImages = this.getImages.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  receiveCity(currentCityFromSearch) {
    this.setState({ currentCity: currentCityFromSearch }, () => {
      this.getWeather(this.state.currentCity);
      this.getImages(this.state.currentCity);
    });
  }

  getWeather(city) {
    const { apiKey, url } = this.props.config.api.weather;
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
      .catch(error => console.log(error));
  }

  getImages(city) {
    const { apiKey, url } = this.props.config.api.unsplash;
    const fetchUrl = `${url}?query=${city}&client_id=${apiKey}`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        return data.results.map(function(image) {
          // console.log(image);
          return {
            id: image.id,
            description: image.description,
            color: image.color,
            image: image.urls.regular,
            thumb: image.urls.thumb,
            user: {
              name: image.user.name,
              url: image.user.links.self
            }
          };
        });
      })
      .then(result =>
        this.setState({
          currentCityImages: result,
          currentBackground: result[0]
        })
      )
      .catch(console.log);
  }

  componentDidMount() {
    this.getWeather(this.state.currentCity);
    this.getImages(this.state.currentCity);
  }
  handleChange(event) {
    this.setState({ currentTypeCity: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.receiveCity(this.state.currentTypeCity);
  }

  handleClick(event, thumbnailData) {
    event.preventDefault();
    this.setState({ currentBackground: thumbnailData });
  }

  render() {
    return (
      <main
        className="content"
        style={{ backgroundColor: `${this.state.currentBackground.color}` }}
      >
        <Header />
        <Photo data={this.state.currentBackground} />
        <Info
          description={this.state.currentWeather.description}
          temp={this.state.currentWeather.temp}
          currentCity={this.state.currentCity}
          user={this.state.currentBackground.user}
        />
        <Thumbs
          photos={this.state.currentCityImages}
          handleClick={this.handleClick}
        />
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          currentCity={this.state.currentTypeCity}
        />
      </main>
    );
  }
}

App.defaultProps = {};

export default App;
