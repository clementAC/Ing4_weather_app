import React, { Component } from "react";
import ForeCast from "./containers/Forecast";

class App extends Component {
  state = {
    cities: [],
    inputValue: ""
  };

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  addCity = () => {
    const { inputValue, cities } = this.state;
    this.setState({ cities: [...cities, inputValue] });
  };

  removeCity = cityName => {
    const { cities } = this.state;
    const newCities = cities.filter(city => {
      return city !== cityName;
    });
    this.setState({ cities: newCities });
  };

  renderCity = (city, index) => {
    return <ForeCast key={index} city={city} removeCity={this.removeCity} />;
  };

  render() {
    const { inputValue, cities } = this.state;
    return (
      <div className="App">
        <h2>Ma super station météo</h2>

        <input
          type="text"
          name="Ville"
          value={inputValue}
          onChange={this.handleChange.bind(this)}
        />
        <button type="button" onClick={this.addCity}>
          Ajouter ville
        </button>

        {cities.map(this.renderCity)}
      </div>
    );
  }
}

export default App;
