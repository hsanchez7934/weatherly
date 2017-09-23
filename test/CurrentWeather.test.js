import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import currentWeather from '../lib/components/Current/CurrentWeather.js';
import DataProps from '../lib/components/DataProps.js';

describe('Current Weather', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = new DataProps(MockData);
    wrapper = shallow(<currentWeather currentObservation={data}/>);
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
    // console.log(data);
    // console.log(wrapper.debug());
var para =wrapper.find('.city');
var paraTxt =para.text();
console.log(paraTxt);
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

  it.skip('should exist', () => {
    const data = new DataProps(MockData);
    const dataCity =data.city;
    console.log(dataCity);

    const newWrapper = shallow(<currentWeather />);
    // console.log(newWrapper.debug());

    // expect(newWrapper.contains(<p className='city'>San Francisco</p>)).toEqual(true);
    // expect(newWrapper.contains(<p className='city'>San Francisco</p>)).toEqual(true);


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
