import React, { Component } from 'react';
import DataProps from './DataProps';
import App from './App/App.js';

export default class Hour {
  constructor(props) {
    super(props)
  }
  <div className='seven-hour-condition-box'>
    <p className='seven-hour-time'>{hour.time}</p>
    <p className='seven-hour-condition seven-hour-temperature'>{hour.temp}</p>
    <img
      className='icon'
      src={this.hourIcon(hour.condition, hour.hour)}/>
    <p className='seven-hour-condition'>{hour.condition}</p>
  </div>
}
