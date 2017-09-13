import React from 'react';
import App from '../App/App.js';
import CurrentWeather from '../Current/CurrentWeather.js';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      location: '',
    }
  }

changeLocation(newLocation) {
  this.setState({location: newLocation})
}

  render() {
    return (
      <div>
        <input type='text'
               placeholder='Enter city'
               onChange={(e) => {changeLocation(e.target.value)}} />
        <button type='Search' onClick={App.callWeather}>Search</button>
      </div>
    )
  }
}
