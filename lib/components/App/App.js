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
      data: {},
      key: 5171990,
    };

    this.callWeather = this.callWeather.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.retriveLocalStorage = this.retriveLocalStorage.bind(this);
    this.deleteFromStorage = this.deleteFromStorage.bind(this);
  }

  componentDidMount() {
    this.callWeather();
    this.changeLocation();
    // this.saveToLocalStorage();
    // this.retriveLocalStorage();
    // this.deleteFromStorage();
  }

  changeLocation(newLocation) {
    // console.log('test');
    // console.log(newLocation);
    // if(!newLocation){
    //   let savedData = this.retriveLocalStorage(this.state.key, this.state.data)
    //   this.callWeather(savedData);
    // }
    this.callWeather(newLocation);
  }

  callWeather(cityLocation) {
    fetch(`http://api.wunderground.com/api/${API_KEY}/geolookup/conditions/forecast10day/hourly/q/${cityLocation}.json`)
    .then((response) =>  response.json())
    .then((data) => {
      // console.log(data);
      const objectProps = new DataProps(data);
      // console.log(objectProps);

      this.setState({
        data: objectProps,
      })
      this.saveToLocalStorage(this.state.key, objectProps)
    })
  }

  saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  retriveLocalStorage(key) {
    JSON.parse(localStorage.getItem(key));
  }

  deleteFromStorage(key) {
    localStorage.removeItem(key);
  }

  render() {
    return(
      <div>
        <Welcome changeLocation={this.changeLocation}/>
        <Search changeLocation={this.changeLocation}/>
        <CurrentWeather currentObservation={this.state.data} />
      </div>
    )
  }

}
