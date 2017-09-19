import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import TenHour from '../lib/components/Tenhour.js';

describe('Tenhour component', () => {
  it('should return specific icon', () => {
    const tenhour = shallow(<Tenhour />);
    console.log(tenhour.debug());
    // expect(tenhour.setIcon('Clear')).toBe('../assets/sunny.svg');
  })
})
