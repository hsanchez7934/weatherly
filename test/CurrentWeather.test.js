import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import TenHour from '../lib/components/Tenhour.js';
import Welcome from '../lib/components/Welcome/Welcome.js';
import currentWeather from '../lib/components/Current/CurrentWeather.js'

describe('Current Weather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<currentWeather />);
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should have a city', () => {
    let cityName = wrapper.find('city');
    expect(cityName).toBeTruthy();
  });

  it.skip('should have description of the weather', () => {
    let currentDate = wrapper.find('description');
    expect(currentDate).toBeTruthy();
  });

  it.skip('should render icon', () => {
    let currentDate = wrapper.find('main-icon');
    expect(currentDate).toBeTruthy();
  });

  it.skip('should display a low temperature', () => {
    let currentTemp = wrapper.find('low');
    expect(currentTemp).toBeTruthy();
  });

  it.skip('should display a high temperature', () => {
    let currentTemp = wrapper.find('high');
    expect(currentTemp).toBeTruthy();
  });

  it.skip('should display a current temperature', () => {
    let currentTemp = wrapper.find('current');
    expect(currentTemp).toBeTruthy();
  });

  it.skip('should provide a summary of the weather conditions', () => {
    let currentDesc = wrapper.find('summary');
    expect(currentDesc).toBeTruthy();
  });

})

describe('Seven Hour Weather', () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = mount(<currentWeather />);
  // });

  it('should exist', () => {
    const data = MockData.current_observation.display_location;
    const newWrapper = mount(<currentWeather data={data}/>);
    // console.log(data);
    
    expect()


  });

  it.skip('should have a time', () => {
    let currentDate = wrapper.find('seven-hour-time');
    expect(currentDate).toBeTruthy();
  });

  it.skip('should display a current temperature', () => {
    let currentTemp = wrapper.find('seven-hour-condition');
    expect(currentTemp).toBeTruthy();
  });

  it.skip('should render icon', () => {
    let currentDate = wrapper.find('icon');
    expect(currentDate).toBeTruthy();
  });

  it.skip('should have description of the weather', () => {
    let currentDate = wrapper.find('description');
    expect(currentDate).toBeTruthy();
  });

})
