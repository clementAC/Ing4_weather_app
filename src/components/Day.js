import React, { Component } from "react";
import "./Day.css";

class Day extends Component {
  render() {
    const { data } = this.props;
    console.log("data", data);
    if (!data) return null;

    const { dt_txt } = data;
    const { temp } = data.main;
    const { icon, description } = data.weather[0];
    return (
      <div className="day-container">
        <p>{dt_txt}</p>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="weather"
        />
        <p>{description}</p>
        <strong>{temp} celsius</strong>
      </div>
    );
  }
}

export default Day;
