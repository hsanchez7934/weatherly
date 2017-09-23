import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../mockdata.js';
import CurrentWeather from '../lib/components/Current/CurrentWeather.js';
import DataProps from '../lib/components/DataProps.js';

describe('Current Weather', () => {
  let wrapper;
  let data = new DataProps(MockData);;

  it('should render one current wether card', () => {
    wrapper = shallow(<CurrentWeather currentObservation={[data]}/>);
    let weatherCard = wrapper.find('.weather-card');
    let weatherCardOne = weatherCard.at(0);

    expect(weatherCard.length).toEqual(1)
  })

  it('should have a city', () => {
    let cityName = wrapper.find('city');
    expect(cityName).toBeTruthy();
  });

  it('should render correct city information', () => {
    wrapper = shallow(<CurrentWeather currentObservation={[data]}/>);
    let weatherCard = wrapper.find('.weather-card');
    let city = weatherCard.find('.city')

    expect(city.text()).toEqual('San Francisco, CA');
  });

  it('should have description of the weather', () => {
    let currentDate = wrapper.find('description');
    expect(currentDate).toBeTruthy();
  });

  it('should render correct weather information', () => {
    wrapper = shallow(<CurrentWeather currentObservation={[data]}/>);
    let weatherCard = wrapper.find('.weather-card');
    let description = weatherCard.find('.description')

    console.log(description.text())

    expect(description.text()).toEqual('Clear');
  });

  it('should render icon', () => {
    let currentDate = wrapper.find('main-icon');
    expect(currentDate).toBeTruthy();
  });

  it('should display a low temperature', () => {
    let currentTemp = wrapper.find('low');
    expect(currentTemp).toBeTruthy();
  });

  it('should display a high temperature', () => {
    let currentTemp = wrapper.find('high');
    expect(currentTemp).toBeTruthy();
  });

  it('should display a current temperature', () => {
    let currentTemp = wrapper.find('current');
    expect(currentTemp).toBeTruthy();
  });

  it('should provide a summary of the weather conditions', () => {
    let currentDesc = wrapper.find('summary');
    expect(currentDesc).toBeTruthy();
  });

})
