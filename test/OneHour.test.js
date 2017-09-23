import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../mockdata.js';
import HourCard from '../lib/components/Hourcard.js';
import DataProps from '../lib/components/DataProps.js';


describe('Seven Hour Weather', () => {
  let wrapper;
  let data = new DataProps(MockData);;


  it('should render an hourly card', () => {
    wrapper = shallow(<HourCard hourIcon={() => {}} currentObservation={[data]}/>);
    let hourly = wrapper.find('.hourly');
    let hourlyOne = hourly.at(0)

    expect(hourlyOne.length).toEqual(1)
  });


  it('should have a time', () => {
    wrapper = shallow(<HourCard hourIcon={() => {}} currentObservation={[data]}/>);
    let hourly = wrapper.find('.hourly');

    expect(hourly).toBeTruthy();
  });


  it('should render the correct time', () => {
    wrapper = shallow(<HourCard hourIcon={() => {}} currentObservation={[data]}/>);
    let hourly = wrapper.find('.seven-hour-time');
    let hourlyOne = hourly.at(0)

    expect(hourlyOne.text()).toEqual('2:00 PM');
    // console.log(hourlyOne.debug())
  });


  it('should display a temperature', () => {
    wrapper = shallow(<HourCard hourIcon={() => {}} currentObservation={[data]}/>);
    let temperature = wrapper.find('.seven-hour-temperature');

    expect(temperature).toBeTruthy();
  });


  it('should render the correct temperature', () => {
    wrapper = shallow(<HourCard hourIcon={() => {}} currentObservation={[data]}/>);
    let temperature = wrapper.find('.seven-hour-temperature');
    let temperatureOne = temperature.at(0)

    expect(temperatureOne.text()).toEqual('64');
    // console.log(temperature.text())
  });


  it('should have an icon', () => {
    wrapper = shallow(<HourCard hourIcon={() => {}} currentObservation={[data]}/>);
    let icon = wrapper.find('icon');

    expect(icon).toBeTruthy();
  });


  it('should have a condition of the weather', () => {
    wrapper = shallow(<HourCard hourIcon={() => {}} currentObservation={[data]}/>);
    let condition = wrapper.find('.seven-hour-condition');

    expect(condition).toBeTruthy();
  });


  it('should render a condition of the weather', () => {
    wrapper = shallow(<HourCard hourIcon={() => {}} currentObservation={[data]}/>);
    let condition = wrapper.find('.seven-hour-condition');
    let conditionOne = condition.at(0)

    expect(conditionOne.text()).toEqual('Partly Cloudy')
  });

})
