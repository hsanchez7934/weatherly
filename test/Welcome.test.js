import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import TenHour from '../lib/components/Tenhour.js';
import Welcome from '../lib/components/Welcome/Welcome.js'

describe('welcome component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  })
  it.skip('input should be empty',() => {
    expect(wrapper.state('input')).toEqual('')
  });

  it.skip('should have a background video',() => {
    const video = wrapper.find('video')
    expect(video).toBeTruthy();
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it.skip('should render elements', () => {
    const elements = wrapper.find('section')
    expect(elements).toHaveLength(1)
  })
})
