import React from 'react';
import App from '../App/App.js';
import CurrentWeather from '../Current/CurrentWeather.js';
import locations from '../../utility/Locations.js';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tree: new Trie(),
      suggestions: [],
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    // this.populateCities = this.populateCities.bind(this);
    // this.suggestCities = this.suggestCities.bind(this);
  }

  // populateCities(locations) {
  //   this.state.tree.populate(locations);
  // }

  // suggestCities(e) {
  //   let userInput = this.state.tree.suggest(e.target.value);
  //   this.setState({
  //     suggestions: [...userInput],
  //     input: e.target.value,
  //   });
  // }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    })
    console.log(this.state.input);
  }

  render() {
    return (
      <div>
        <input type='text'
               placeholder='Enter city'
               onChange={this.handleChange}
               onClick={this.props.changeLocation(this.state.input)}
              />
      </div>
    )
  }
}
