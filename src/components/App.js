import React from "react";
import Photo from "./Photo";
import Info from "./Info";
import Thumbs from "./Thumbs";
import Search from "./Search";
import Header from "./Header";
class App extends React.Component {
  constructor(props) {
    super();

    // Use the props passed to App here (hint: look at ../index.js)
  }

  render() {
    return (
      <main className="content">
        <Header />
        <Photo />
        <Info />
        <Thumbs />
        <Search />
      </main>
    );
  }
}

App.defaultProps = {};

export default App;
