import React, { Component } from 'react';


export default class currentWeather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let objectData = this.props.currentObservation;
    console.log(objectData);

    return (
     <section>
      {/* <p>Current city: {objectData.observation_location.city}</p> */}
      <p>Current day: {objectData.observation_time_rfc822}</p>
      <p>Current temperature: {objectData.temp_f}</p>

      <p>Current condition: {objectData.weather}</p>
      <p>Expect high: {objectData.weather}</p>
      <p>Current condition: {objectData.weather}</p>


      {/* <p>Current temperature: {temp_f}</p> */}

     </section>

   )
  }


}
