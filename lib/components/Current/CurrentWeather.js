import React, { Component } from 'react';


export default class currentWeather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('current weather props', this.props)
    // const {temp_f} = this.props.currentObservation
    return (
     <section>
      <p>Current city: {this.props.currentObservation.observation_location.city}</p>
      <p>Current day: {this.props.currentObservation.observation_time_rfc822}</p>
      <p>Current temperature: {this.props.currentObservation.temp_f}</p>

      <p>Current weather: {this.props.currentObservation.weather}</p>


      {/* <p>Current temperature: {temp_f}</p> */}

     </section>

   )
  }


}
