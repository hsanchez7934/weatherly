import React from 'react';
import Search from '../Search/Search.js';
import App from '../App/App.js'
import CurrentWeather from '../Current/CurrentWeather.js'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <div>
        <section>
          Welcome!
        </section>
        <Search changeLocation={this.props.changeLocation} />
      </div>
    )
  }
}
