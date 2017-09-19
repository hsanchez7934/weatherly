import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import TenHour from '../lib/components/Tenhour.js';
import modules from 'jest-css-modules'

describe('Tenhour component', () => {
  it('should return specific icon', () => {
    const tenhour = mount(<Tenhour />);

  })
})
