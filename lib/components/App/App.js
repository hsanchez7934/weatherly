import React from 'react';
import dummyData from '../../../__mock__/mockData';
import CurrentWeather from '../Current/CurrentWeather';
import API_KEY from '../../../key';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };

  }

  componentDidMount(){
    fetch(`http://api.wunderground.com/api/${API_KEY}/conditions/q/CA/San_Francisco.json`)
    .then((response) =>  response.json())
    .then((data) => {
    this.setState({ data: data.current_observation })
    })
  }

  render() {
    console.log(this.state.data);
    return(
      <div>
        Hola
        <CurrentWeather currentObservation={dummyData.current_observation} />
      </div>
    )
  }

}
