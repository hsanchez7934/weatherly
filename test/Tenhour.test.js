import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import TenHour from '../lib/components/Tenhour.js';
import Welcome from '../lib/components/Welcome/Welcome.js'

describe('welcome component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenHour />);
  });

  it('should have a container',() => {
    const video = wrapper.find('ten-day-container')
    expect(video).toBeTruthy();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render elements', () => {
    const elements = wrapper.find('div')
    expect(elements).toHaveLength(1)
  });

  it('should display ten days ahead', () => {
    let currentDate = wrapper.find('ten-day');
    expect(currentDate).toBeTruthy();
  });

  it('should render icon', () => {
    let currentDate = wrapper.find('icon');
    expect(currentDate).toBeTruthy();
  });

  it('should display a low temperature', () => {
    let currentTemp = wrapper.find('day-low');
    expect(currentTemp).toBeTruthy();
  });

  it('should display a high temperature', () => {
    let currentTemp = wrapper.find('day-high');
    expect(currentTemp).toBeTruthy();
  });

})
