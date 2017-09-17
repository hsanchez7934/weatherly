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
       <p>{objectData[0].city}</p>
        {/* <article
                className='section-left'>
          <p className='city'>{objectData.city}</p>

          <p>Current date: {objectData.date}</p>
          <p>Current temperature: {objectData.temp}</p>
          <p>Current description: {objectData.description}</p>
          <p>Expect high: {objectData.weekDayHigh}</p>
          <p>Expect low: {objectData.weekDayLow}</p>
          <p>Current summary: {objectData.summary}</p>
        </article>
        <article
                  className='section-right'>
          <p>Current day: {objectData.day}</p>
          <p>daily info: {objectData.dailyInfo}</p>
        </article> */}
     </section>
   )
  }


}
