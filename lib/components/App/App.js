import React from 'react';
import dummyData from '../../../__mock__/mockData';
import CurrentWeather from '../Current/CurrentWeather';
import API_KEY from '../../../key';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };

  }

  componentDidMount(){
    fetch(`http://api.wunderground.com/api/${API_KEY}/geolookup/conditions/forecast10day/hourly/q/CA/San_Francisco.json`)
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
    this.setState({ data: data.current_observation })
    })
  }

  render() {
    // console.log(this.state.data);
    return(
      <div>
        Hola
        <CurrentWeather currentObservation={this.state.data} />
      </div>
    )
  }

}
