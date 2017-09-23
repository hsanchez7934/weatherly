import React, { Component } from 'react';
import DataProps from './DataProps';
import App from './App/App.js';
import Search from './Search/Search.js';

export default class HourCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  //  console.log(this.props);
   let objectData = this.props.currentObservation[0];
  //  console.log(objectData);
   if(!objectData) {
     return(
       <div>

       </div>
     )
   };

    return(
      <div className='hourly'>
        {
        objectData.hours.map( (hour, index) => {
          return (
            <div className='seven-hour-condition-box' key={index}>
              <p className='seven-hour-time'>{hour.time}</p>
              <p className='seven-hour-temperature'>{hour.temp}</p>
              <img
                className='icon'
                src={this.props.hourIcon(hour.condition, hour.hour)}/>
              <p className='seven-hour-condition'>{hour.condition}</p>
            </div>
          )
        })
        }
      </div>
    )
  }
}
