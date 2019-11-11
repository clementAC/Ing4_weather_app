import React, { Component } from "react";
import axios from "axios";
import Day from "../../components/Day";
import "./Forecast.css";

const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "768a35a09a1701be84498950a95e7cf5";

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null
    };
  }

  callAPI = city => {
    // Call API
    axios
      .get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then(({ data }) => {
        // Recupere uniquement la propriété data
        const { list } = data;
        // On prend les trois premières heures de chaque jour (donc de 0-3h))
        const forecast = [list[0], list[9], list[17], list[25], list[33]];

        this.setState({ forecast });
      })
      .catch(console.error);
  };

  // Lance un appel au lancement du component
  componentDidMount() {
    const { city } = this.props;
    this.callAPI(city);
  }

  // Fonction appelé lors du click sur le bouton
  // Appel la fonction recu en paramètre de App
  removeCity = () => {
    const { removeCity, city } = this.props;
    removeCity(city);
  };

  render() {
    const { forecast } = this.state;
    const { city } = this.props;
    if (!forecast) return <p>Loading...</p>;
    return (
      <div>
        <h2 className="forecast-header">{city}</h2>
        <div className="remove-btn-container">
          <button type="button" onClick={this.removeCity}>
            Enlever cette ville
          </button>
        </div>
        <div className="forecast-container">
          {forecast.map((forecastData, index) => {
            return <Day key={index} data={forecastData} />;
          })}
        </div>
      </div>
    );
  }
}

export default Forecast;
