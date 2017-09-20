import React, { Component } from 'react';
import DataProps from '../DataProps';
import App from '../App/App.js';
import Search from '../Search/Search.js';


export default class currentWeather extends React.Component {
  constructor(props) {
    super(props);
  }

  hourIcon(condition, hour) {
    if(condition === 'Fog') {
      return '../assets/fog.svg';
    }
    if(condition === 'Light Snow') {
      return '../assets/lightsnow.svg';
    }
    if(condition === 'Scattered Clouds') {
      return '../assets/scatteredclouds.svg';
    }
    if(condition === 'Haze') {
      return '../assets/haze.svg';
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
    if(condition === 'Snow Showers') {
      return '../assets/snowshowers.svg';
    }
    if(condition === 'Chance of a Thunderstorm') {
      return '../assets/thunderstormchance.svg';
    }
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
    if(condition === 'Mostly Cloudy') {
      return '../assets/cloudy.svg';
    }
    if(condition === 'Overcast') {
      return '../assets/overcast.svg';
    }
    if(condition === 'Partly Cloudy') {
      return '../assets/partlycloudy.svg';
    }
  }

  render() {
    let objectData = this.props.currentObservation;
    if(!objectData) {
      return(
        <div>

        </div>
      )
    };

    return (

      <section className='section-left'>
        <Search changeLocation={this.props.changeLocation} />
        <article className='weather-card'>

          <p className='city'>{objectData[0].city}</p>
          <p className='description'>{objectData[0].description}</p>

          <img className='main-icon' src={this.hourIcon(objectData[0].condition, objectData[0].hour)}/>

          <article className='temperature-box'>
            <p className='low'>L: {objectData[0].low}</p>
            <p className='current'> Curr: {objectData[0].temp}</p>
            <p className='high'>H: {objectData[0].high}</p>
          </article>

          <p className='summary'>{objectData[0].summary}</p>

          <div className='hourly'>

  {/* // 1 */}
            <div className='seven-hour-condition-box'>
              <p className='seven-hour-time'>{objectData[0].hourOneTime}</p>
              <p className='seven-hour-condition seven-hour-temperature'>{objectData[0].hourOneTemperature}</p>
              <img className='icon'   src={this.hourIcon(objectData[0].hourOneCondition,
                                objectData[0].hourOneHour)}/>
              <p className='seven-hour-condition'>{objectData[0].hourOneCondition}</p>
            </div>

  {/* // 2 */}
            <div className='seven-hour-condition-box'>
              <p className='seven-hour-time'>{objectData[0].hourTwoTime}</p>
              <p className='seven-hour-condition seven-hour-temperature'>{objectData[0].hourTwoTemperature}</p>
              <img className='icon'   src={this.hourIcon(objectData[0].hourTwoCondition,
                  objectData[0].hourTwoHour)}/>
              <p className='seven-hour-condition'>{objectData[0].hourTwoCondition}</p>
            </div>

  {/* // 3 */}
            <div className='seven-hour-condition-box'>
              <p className='seven-hour-time'>{objectData[0].hourThreeTime}</p>
              <p className='seven-hour-condition seven-hour-temperature'>{objectData[0].hourThreeTemperature}</p>
              <img className='icon'   src={this.hourIcon(objectData[0].hourThreeCondition,
                              objectData[0].hourThreeHour)}/>
              <p className='seven-hour-condition'>{objectData[0].hourThreeCondition}</p>
            </div>

  {/* // 4 */}
            <div className='seven-hour-condition-box'>
              <p className='seven-hour-time'>{objectData[0].hourFourTime}</p>
              <p className='seven-hour-condition seven-hour-temperature'>{objectData[0].hourFourTemperature}</p>
              <img className='icon'   src={this.hourIcon(objectData[0].hourFourCondition,
                              objectData[0].hourFourHour)}/>
              <p className='seven-hour-condition'>{objectData[0].hourFourCondition}</p>
            </div>

  {/* // 5 */}
            <div className='seven-hour-condition-box'>
              <p className='seven-hour-time'>{objectData[0].hourFiveTime}</p>
              <p className='seven-hour-condition seven-hour-temperature'>{objectData[0].hourFiveTemperature}</p>
              <img className='icon'   src={this.hourIcon(objectData[0].hourFiveCondition,
                                  objectData[0].hourFiveHour)}/>
              <p className='seven-hour-condition'>{objectData[0].hourFiveCondition}</p>
            </div>

  {/* // 6 */}
            <div className='seven-hour-condition-box'>
              <p className='seven-hour-time'>{objectData[0].hourSixTime}</p>
              <p className='seven-hour-condition seven-hour-temperature'>{objectData[0].hourSixTemperature}</p>
              <img className='icon'   src={this.hourIcon(objectData[0].hourSixCondition,
                                objectData[0].hourSixHour)}/>
              <p className='seven-hour-condition'>{objectData[0].hourSixCondition}</p>
            </div>

  {/* // 7 */}
            <div className='seven-hour-condition-box'>
              <p className='seven-hour-time'>{objectData[0].hourSevenTime}</p>
              <p className='seven-hour-condition seven-hour-temperature'>{objectData[0].hourSevenTemperature}</p>
              <img className='icon'   src={this.hourIcon(objectData[0].hourSevenCondition,
                          objectData[0].hourSevenHour)}/>
              <p className='seven-hour-condition'>{objectData[0].hourSevenCondition}</p>
            </div>


          </div>

        </article>
      </section>
    )
  }
}
