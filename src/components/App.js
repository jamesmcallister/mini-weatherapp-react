import React from "react";
import Photo from "./Photo";
import Info from "./Info";
import Thumbs from "./Thumbs";
import Search from "./Search";
class App extends React.Component {
  constructor(props) {
    super();

    // Use the props passed to App here (hint: look at ../index.js)
  }

  render() {
    return (
      <div>
        <Photo />
        <Info />
        <Thumbs />
        <Search />
      </div>
    );
  }
}

App.defaultProps = {};

export default App;
