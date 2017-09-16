import React from 'react';
import Search from '../Search/Search.js';
import App from '../App/App.js'
import CurrentWeather from '../Current/CurrentWeather.js';
import styles from '../../../styles/Welcome.css'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <section>
        <h1>
          Welcome!
        </h1>
        <Search changeLocation={this.props.changeLocation} />
        <button
              className='go-button'
          >go</button>
      </section>
    )
  }
}
