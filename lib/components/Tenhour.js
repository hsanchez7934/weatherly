import React, { Component } from 'react';
import DataProps from './DataProps';
import App from './App/App.js';
import styles from '../../styles/TenHour.css';

export default class TenHour extends React.Component {
  constructor(props) {
    super(props)
    this.setIcon = this.setIcon.bind(this);
  }

  setIcon(condition, hour) {
    if(condition === 'Clear') {
      let day = [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
      for(let i = 0; i < day.length; i++) {
        return hour === i
        ? '..assets/sunny.svg'
        : '../assets/clearnight.svg';
      }
    }
    if(condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
    if(condition === 'Thunderstorm') {
      return '../assets/thunderstorm.svg';
    }
    if(condition === 'Mostly Cloudy' || 'Overcast') {
      return '../assets/cloudy.svg';
    }
    if(condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
    if(condition === 'Chance of Rain') {
      return '../assets/partlyrainy.svg';
    }
    if(condition === 'Rain') {
      return '../assets/rain.svg';
    }
    if(condition === 'Snow') {
      return '../assets/snowing.svg';
    }
    if(condition === 'Chance of a Thunderstorm') {
      return '../assets/thunderstormchance.svg';
    }
  }

render() {
  console.log(this.props);
  let objectData = this.props.currentObservation;
  // let hour = objectData[0].dailyInfo[0].date.hour;
  console.log(objectData);
  // console.log(hour);
  if(!objectData){
    return(
      <div>

      </div>
    )
  }

  return (
    <div className='ten-day-container'>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[1].conditions,
                                                  objectData[0].dailyInfo[1].date.hour)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[1].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[1].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[1].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[2].conditions,
                                                  objectData[0].dailyInfo[2].date.hour)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[2].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[2].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[2].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[3].conditions,
                                                  objectData[0].dailyInfo[3].date.hour)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[3].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[3].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[3].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[4].conditions,
                                                  objectData[0].dailyInfo[4].date.hour)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[4].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[4].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[4].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[5].conditions,
                                                  objectData[0].dailyInfo[5].date.hour)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[5].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[5].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[5].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[6].conditions,
                                                  objectData[0].dailyInfo[6].date.hour)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[6].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[6].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[6].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[7].conditions,
                                                  objectData[0].dailyInfo[7].date.hour)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[7].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[7].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[7].low.fahrenheit}</p>
      </article>

    </div>
  )
}
}
