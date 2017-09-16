import React, { Component } from 'react';
import DataProps from '../DataProps';
import App from '../App/App.js'


export default class currentWeather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let objectData = this.props.currentObservation;
    console.log(objectData);

    return (
     <section>
      <p>Current city: {objectData.city}</p>
      <p>Current date: {objectData.date}</p>
      <p>Current temperature: {objectData.temp}</p>
      <p>Current description: {objectData.description}</p>
      <p>Expect high: {objectData.weekDayHigh}</p>
      <p>Expect low: {objectData.weekDayLow}</p>
      <p>Current summary: {objectData.summary}</p>
      <p>Current day: {objectData.day}</p>
      <p>daily info: {objectData.dailyInfo}</p>
     </section>
   )
  }


}
