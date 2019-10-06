import React from "react";
import { songStore } from "./store/songStore";
import Header from "./components/Header";
import Home from "./components/Home";

// ... leave decorate(Store, {...}) untouched ...

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <Home songStore={songStore} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
