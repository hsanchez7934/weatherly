import React from 'react';
import Search from '../Search/Search.js';
import App from '../App/App.js'
import CurrentWeather from '../Current/CurrentWeather.js';
import styles from '../../../styles/Welcome.css'
import Doc from '../../../styles/Doc.css'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <section className='welcome-container'>
        <video poster='../../assets/thunderstorm5.mp4' className='background-video'
               playsInline autoPlay muted loop>
            <source src='../../assets/thunderstorm5.mp4' type='video/mp4'></source>
        </video>
        <article className='input-container'>
          <h1>WEATHRLY</h1>
          <Search className='search-bar'
                  changeLocation={this.props.changeLocation} />
        </article>
      </section>
    )
  }
}
