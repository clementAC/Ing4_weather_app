import React, { Component } from "react";
import Forecast from "./containers/Forecast";

class App extends Component {
  state = {
    city: "Paris"
  };

  handleChange = event => {
    this.setState({ city: event.target.value });
  };

  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <h2> Ma super station météo</h2>

        <input
          type="text"
          name="Ville"
          value={city}
          onChange={this.handleChange}
        />

        <Forecast city={city} />
      </div>
    );
  }
}

export default App;
