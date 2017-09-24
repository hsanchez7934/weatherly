import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import TenDay from '../lib/components/TenDay.js';
import DataProps from '../lib/components/DataProps.js';

describe('tenhour component', () => {
  let data;

  it('component should contain ten day cards',() => {
    data = new DataProps(MockData);
    const newWrapper = shallow(<TenDay currentObservation={[data]} />)
    const dayCards = newWrapper.find('.day-card');
    const firstDay = dayCards.at(0);
    const firstDayHigh = firstDay.find('.day-high');

    expect(dayCards.length).toEqual(10);
  });

  it('day card should render correct information', () => {
    data = new DataProps(MockData);
    const newWrapper = shallow(<TenDay currentObservation={[data]} />)
    const dayCards = newWrapper.find('.day-card');
    const firstDay = dayCards.at(0);
    const firstDayHigh = firstDay.find('.day-high');
    const firstDayLow = firstDay.find('.day-low');
    const dayName = firstDay.find('.ten-day');
    const icon = firstDay.find('.icon');

    expect(firstDayHigh.text()).toEqual('H: 67');
    expect(firstDayLow.text()).toEqual('L: 55');
    expect(dayName.text()).toEqual('Today');
    expect(icon.prop('src')).toEqual('../assets/partlycloudy.svg');
  });

})
