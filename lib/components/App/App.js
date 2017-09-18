import React from 'react';
// import dummyData from '../../../__mock__/mockData';
import CurrentWeather from '../Current/CurrentWeather.js';
import API_KEY from '../../../key';
import DataProps from '../DataProps'
import Search from '../Search/Search.js'
import Welcome from '../Welcome/Welcome.js';
import styles from '../../../styles/Welcome.css';
import TenHour from '../Tenhour.js'

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
  }

  componentDidMount() {
    this.callWeather();
  }

  changeLocation(newLocation) {
    this.callWeather(newLocation);
  }

  callWeather(cityLocation) {
    let holder;
    if(!cityLocation) {
      holder = this.retrieveLocalStorage();
      }
    fetch(`http://api.wunderground.com/api/${API_KEY}/geolookup/conditions/forecast10day/hourly/q/${cityLocation || holder}.json`)
    .then((response) =>  response.json())
    .then((data) => {
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

  render() {
    return(
      <div>
        <Welcome changeLocation={this.changeLocation} />
        {/* <Search changeLocation={this.changeLocation} /> */}
        <CurrentWeather currentObservation={this.state.data} />
        <TenHour currentObservation={this.state.data}/>
      </div>
    )
  }

}
