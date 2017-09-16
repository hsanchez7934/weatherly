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
      userWeather: this.retriveLocalStorage(this.state.key)
    };

    this.callWeather = this.callWeather.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  componentDidMount() {
    this.callWeather();
    this.changeLocation();
  }

  changeLocation(newLocation) {
    console.log('test');
    console.log(newLocation);
    if(!newLocation){
      this.callWeather(this.state.userWeather)
    }
    this.callWeather(newLocation);
  }

  callWeather(cityLocation) {
    fetch(`http://api.wunderground.com/api/${API_KEY}/geolookup/conditions/forecast10day/hourly/q/${cityLocation}.json`)
    .then((response) =>  response.json())
    .then((data) => {
      // console.log(data);
      const objectProps = new DataProps(data);
      // console.log(objectProps);
      this.saveToLocalStorage(this.state.key, objectProps)
      this.setState({ data: objectProps })
    })
  }

  saveToLocalStorage(key, object){
    localStorage.setItem(key, JSON.stringify(object))
  }

  retriveLocalStorage(key){
    JSON.parse(localStorage.getItem(key))
  }

  deleteFromStorage(key){
    localStorage.removeItem(key)
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
