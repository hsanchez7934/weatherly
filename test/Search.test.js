import React, { Component } from 'react';
import App from '../lib/components/App/App.js';
import { shallow, mount } from 'enzyme';
import MockData from '../Mockdata.js';
import TenHour from '../lib/components/Tenhour.js';
import Welcome from '../lib/components/Welcome/Welcome.js'
import Search from '../lib/components/Search/Search.js';

describe('Search component', () => {

  it('state.input should be empty', () => {
    const wrapper = shallow(<Search changeLocation={() => {}}/>);
    const input = wrapper.find('.search-component-container');
    // console.log(input.debug());
    expect(wrapper.state('input')).toEqual('');
  })
});
it('state.input should change when input is changed', () => {
  const wrapper = shallow(<Search changeLocation={() => {}}/>);
  const searchContainer = wrapper.find('.search-component-container');
  const input = searchContainer.find('.search-bar');
  const button = input.find('.search-btn');

  expect(wrapper.state('input')).toEqual('');
  input.simulate('change', {target: {value: 'denver, co'}})

  expect(wrapper.state('input')).toEqual('denver, co')
});

it('should reset input back to empty', () => {
  const wrapper = shallow(<Search changeLocation={() => {}}/>);
  const searchContainer = wrapper.find('.search-component-container');
  const input = searchContainer.find('.search-bar');
  const button = searchContainer.find('.search-btn');
  console.log(button.debug());

  expect(wrapper.state('input')).toEqual('');
  input.simulate('change', {target: {value: 'denver, co'}})

  expect(wrapper.state('input')).toEqual('denver, co')
  button.simulate('click');
  expect(wrapper.state('input')).toEqual('')
})
