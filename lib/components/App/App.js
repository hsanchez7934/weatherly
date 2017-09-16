import React from 'react';
import dummyData from '../../../__mock__/mockData';
import CurrentWeather from '../Current/CurrentWeather';
import API_KEY from '../../../key';
import DataProps from '../DataProps'
import Search from '../Search/Search.js'
import Welcome from '../Welcome/Welcome.js'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
    // this.callWeather = this.callWeather.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  componentDidMount() {
    this.callWeather();
    this.changeLocation();
  }

  changeLocation(newLocation) {
    console.log('test');
    console.log(newLocation);
    this.callWeather(newLocation);
  }

  callWeather(cityLocation) {
    fetch(`http://api.wunderground.com/api/${API_KEY}/geolookup/conditions/forecast10day/hourly/q/${cityLocation}.json`)
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
      const objectProps = new DataProps(data);
      console.log(objectProps);
      this.setState({ data: objectProps })
    })
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
