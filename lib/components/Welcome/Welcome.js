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
      <section
              className='welcome-container'>
        <article
            className='mid-ground'>
        <h1>
          WELCOME
        </h1>
        <Search
              className='search-bar'
              changeLocation={this.props.changeLocation} />
        <button
              className='button'
          >find</button>
        </article>
        {/* <div className='frame'>
          <div className='gradient-1'></div>
          <div className='gradient-2'></div>
        </div> */}
      </section>
    )
  }
}
