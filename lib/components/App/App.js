import React from 'react';
// import dummyData from '../../../__mock__/mockData';
import CurrentWeather from '../Current/CurrentWeather.js';
import API_KEY from '../../../key';
import DataProps from '../DataProps'
import Search from '../Search/Search.js'
import Welcome from '../Welcome/Welcome.js';
import welcomeStyles from '../../../styles/Welcome.css';
import appStyles from '../../../styles/App.css';
import TenHour from '../Tenhour.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    this.callWeather = this.callWeather.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.retrieveLocalStorage = this.retrieveLocalStorage.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  componentDidMount() {
    this.callWeather();
  }

  changeLocation(newLocation) {
    this.callWeather(newLocation);
    $('.search-bar').val('');
    $('.welcome-container').fadeOut('slow', 'linear');
    this.toggleClass();
  }

  callWeather(cityLocation) {
    let savedCity;
    if(!cityLocation) {
      if(!localStorage.getItem('wunderground')) {
        return;
        }
        else {
          savedCity = this.retrieveLocalStorage();
        }
      }
    fetch(`http://api.wunderground.com/api/${API_KEY}/geolookup/conditions/forecast10day/hourly/q/${cityLocation || savedCity}.json`)
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
      const objectProps = new DataProps(data);
      this.setState({
        data: [objectProps],
      })
      this.saveToLocalStorage(this.state.data[0].city);
    })
  }

  saveToLocalStorage(key) {
    localStorage.setItem('wunderground', key);
  }

  retrieveLocalStorage() {
     return localStorage.getItem('wunderground');
  }

  toggleClass() {
    const weatherCard = $('#weather-info-container');
    weatherCard.removeClass('body-hidden');
    weatherCard.addClass('body-visible')
  }

  render() {
    if(localStorage.getItem('wunderground')) {
      return(
        <div className='app-container'>
          <div className='body-visible' id='weather-info-container'>
            <Search changeLocation={this.changeLocation}/>
            <CurrentWeather currentObservation={this.state.data} />
            <TenHour currentObservation={this.state.data}/>
          </div>
      </div>
      )
    }
    else {
      return(
        <div className='app-container'>
        <Welcome changeLocation={this.changeLocation} />
        <div className='body-hidden' id='weather-info-container'>
          <Search changeLocation={this.changeLocation}/>
          <CurrentWeather currentObservation={this.state.data} />
          <TenHour currentObservation={this.state.data}/>
        </div>
      </div>
      )
    }
  }
}
