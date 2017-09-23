import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../mockdata.js';
import HourCard from '../lib/components/Hourcard.js';
import DataProps from '../lib/components/DataProps.js';
import LocalStorage from '../Mock/storageMock.js';


describe('App', () => {


  it('should exist', () => {
    let wrapper = shallow(<App />);

    expect(wrapper).toBeDefined();
  });


  it('should start with thisState.data as null', () => {
    let wrapper = shallow(<App />);

    expect(wrapper.state('data')).toEqual(null)
  });


  it('should render welcome component if local storage is clear', () => {
    let wrapper = shallow(<App />);
    let welcome = wrapper.find('.app-container');
    let hidden = welcome.find('.body-hidden');

    expect(hidden.prop('className')).toEqual('body-hidden')
  });


  it('should display current weather if local storage is used', () => {
    global.localStorage = new LocalStorage;
    global.localStorage.setItem('wunderground', 'Denver CO');
    let wrapper = shallow(<App />);
    let visible = wrapper.find('.body-visible')

    expect(visible.prop('className')).toEqual('body-visible')
});

})
