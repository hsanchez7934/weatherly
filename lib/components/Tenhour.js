import React, { Component } from 'react';
import DataProps from './DataProps';
import App from './App/App.js';
import styles from '../../styles/TenHour.css';

export default class TenHour extends React.Component {
  constructor(props) {
    super(props)
    this.setIcon = this.setIcon.bind(this);
  }

  setIcon(condition) {
    if(condition === 'Scattered Clouds') {
      return '../assets/scatteredclouds.svg';
    }
    if(condition === 'Fog') {
      return '../assets/fog.svg';
    }
    if(condition === 'Haze') {
      return '../assets/haze.svg';
    }
    if(condition === 'Snow Showers') {
      return '../assets/snowshowers.svg';
    }
    if(condition === 'Overcast') {
      return '../assets/overcast.svg';
    }
    if(condition === 'Rain') {
      return '../assets/rain.svg';
    }
    if(condition === 'Snow') {
      return '../assets/snowing.svg';
    }
    if(condition === 'Chance of Rain') {
      return '../assets/partlyrainy.svg';
    }
    if(condition === 'Chance of a Thunderstorm') {
      return '../assets/thunderstormchance.svg';
    }
    if(condition === 'Clear') {
      return '../assets/sunny.svg'
    }
    if(condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
    if(condition === 'Thunderstorm') {
      return '../assets/thunderstorm.svg';
    }
    if(condition === 'Mostly Cloudy') {
      return '../assets/cloudy.svg';
    }
    if(condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
  }

render() {
  console.log(this.props);
  let objectData = this.props.currentObservation;

  if(!objectData){
    return(
      <div>

      </div>
    )
  }


  console.log('card:1 ', objectData[0].dailyInfo[1].conditions);
  console.log('card:2 ', objectData[0].dailyInfo[2].conditions);
  console.log('card:3 ', objectData[0].dailyInfo[3].conditions);
  console.log('card:4 ', objectData[0].dailyInfo[4].conditions);
  console.log('card:5 ', objectData[0].dailyInfo[5].conditions);
  console.log('card:6 ', objectData[0].dailyInfo[6].conditions);
  console.log('card:7 ', objectData[0].dailyInfo[7].conditions);
  return (
    <div className='ten-day-container'>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[1].conditions)}/>
        </section>

        <p className='ten-day'>{objectData[0].dailyInfo[1].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[1].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[1].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[2].conditions)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[2].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[2].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[2].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[3].conditions)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[3].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[3].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[3].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[4].conditions)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[4].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[4].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[4].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[5].conditions)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[5].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[5].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[5].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[6].conditions)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[6].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[6].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[6].low.fahrenheit}</p>
      </article>

      <article className='day-card'>
        <section className='ten-day-icon'>
          <img className='icon' src={this.setIcon(objectData[0].dailyInfo[7].conditions)}/>
        </section>
        <p className='ten-day'>{objectData[0].dailyInfo[7].date.weekday}</p>
        <p className='day-high'>{objectData[0].dailyInfo[7].high.fahrenheit}</p>
        <p className='day-low'>{objectData[0].dailyInfo[7].low.fahrenheit}</p>
      </article>

    </div>
  )
}
}
