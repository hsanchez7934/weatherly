import React from 'react';
import dummyData from '../../../__mock__/mockData';
import CurrentWeather from '../Current/CurrentWeather';
import API_KEY from '../../../key';
import DataProps from '../DataProps'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };

  }

  componentDidMount(){
    this.callWeather()
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

  callWeather() {
    fetch(`http://api.wunderground.com/api/${API_KEY}/geolookup/conditions/forecast10day/hourly/q/CA/San_Francisco.json`)
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
      const objectProps = new DataProps(data)
      console.log(objectProps);
      this.setState({ data: objectProps })
    })
  }
}
