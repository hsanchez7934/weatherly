import React, { Component } from 'react';
import DataProps from '../DataProps';
import App from '../App/App.js';
import styles from '../../../styles/CurrentWeather.css'


export default class currentWeather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let objectData = this.props.currentObservation;
    if(!objectData){
      return(
        <div>

        </div>
      )
    }
    return (
     <section>
       <p>
         {objectData[0].city}
       </p>
     </section>
   )
  }


}
