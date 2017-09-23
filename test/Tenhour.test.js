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
    wrapper = shallow(<TenHour currentObservation={data}/>);
  });

  it.skip('component should contain ten day cards',() => {
    data = new DataProps(MockData);
    const newWrapper = shallow(<TenHour currentObservation={[data]} />)
    const dayCards = newWrapper.find('.day-card');
    const firstDay = dayCards.at(0);
    const firstDayHigh = firstDay.find('.day-high');

    expect(dayCards.length).toEqual(10);
  });

  it('day card should render correct information', () => {
    data = new DataProps(MockData);
    const newWrapper = shallow(<TenHour currentObservation={[data]} />)
    const dayCards = newWrapper.find('.day-card');
    const firstDay = dayCards.at(0);
    const firstDayHigh = firstDay.find('.day-high');

    expect(firstDayHigh.text()).toEqual(67);
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
