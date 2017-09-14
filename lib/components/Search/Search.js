import React from 'react';
import App from '../App/App.js';
import CurrentWeather from '../Current/CurrentWeather.js';
import Trie from '../../utility/Trie.js';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    // let {callWeather} =
    this.state = {
      tree: new Trie(),
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value})
  }

  render() {

    return (
      <div>
        <input type='text'
               placeholder='Enter city'
               onChange={this.handleChange} />
        <button type='Search' onClick={this.props.changeLocation(this.state.input)}>Search</button>
      </div>
    )
  }
}
