import React from 'react';
import dummyData from '../../../__mock__/mockData';
import CurrentWeather from '../Current/CurrentWeather';
import API_KEY from '../../../key';
import DataProps from '../DataProps'
import Search from '../Search/Search.js'
import Welcome from '../Welcome/Welcome.js';
import styles from '../../../styles/Welcome.css';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      // key: 517199,
    };
    this.callWeather = this.callWeather.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.retriveLocalStorage = this.retriveLocalStorage.bind(this);
    // this.deleteFromStorage = this.deleteFromStorage.bind(this);
  }

  componentDidMount() {
    this.callWeather();
    this.changeLocation();
    // this.saveToLocalStorage();
    this.retriveLocalStorage();
    this.deleteFromStorage();
  }

  changeLocation(newLocation) {
    console.log(newLocation);
    this.callWeather(newLocation);
  }

  callWeather(cityLocation) {

    if(!cityLocation) {
      return;
    }
    fetch(`http://api.wunderground.com/api/${API_KEY}/geolookup/conditions/forecast10day/hourly/q/${cityLocation}.json`)
    .then((response) =>  response.json())
    .then((data) => {
      // console.log(data);
      const objectProps = new DataProps(data);
      this.setState({
        data: [objectProps],
        // savedCity: objectProps.city,
      })
      console.log('datas', this.state.data[0]);
      this.saveToLocalStorage(this.state.data[0].city);
    })
  }

  saveToLocalStorage(key) {
    localStorage.setItem('wundergound', key);
  }

  retriveLocalStorage() {
    const zip = localStorage.getItem("wunderground");

  }

  deleteFromStorage(key) {
    localStorage.removeItem(key);
  }

  render() {
    console.log(this.state.data);
    return(
      <div>
        <Welcome changeLocation={this.changeLocation} />
        <Search changeLocation={this.changeLocation} />
        <CurrentWeather currentObservation={this.state.data} />
      </div>
    )
  }

}
