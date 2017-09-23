import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import TenHour from '../lib/components/Tenhour.js';
import Welcome from '../lib/components/Welcome/Welcome.js'
import DataProps from '../lib/components/DataProps.js';

describe('tenhour component', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = new DataProps(MockData);
    wrapper = shallow(<TenHour currentObservation={data}/>);
  });

  it('should have a container',() => {
    let newWrapper = shallow(<TenHour currentObservation={data} />)
    console.log(newWrapper);
    // console.log(data);
    // const video = wrapper.find('.ten-day-container');
    // console.log(video);
    // expect(video).toBeTruthy();
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should render elements', () => {
    const elements = wrapper.find('div')
    expect(elements).toHaveLength(1)
  });

  it.skip('should display ten days ahead', () => {
    let currentDate = wrapper.find('ten-day');
    expect(currentDate).toBeTruthy();
  });

  it.skip('should render icon', () => {
    let currentDate = wrapper.find('icon');
    expect(currentDate).toBeTruthy();
  });

  it.skip('should display a low temperature', () => {
    let currentTemp = wrapper.find('day-low');
    expect(currentTemp).toBeTruthy();
  });

  it.skip('should display a high temperature', () => {
    let currentTemp = wrapper.find('day-high');
    expect(currentTemp).toBeTruthy();
  });
})
