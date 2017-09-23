// import React, { Component } from 'react';
// import App from '../lib/components/App/App.js';
// import { shallow, mount } from 'enzyme';
// import MockData from '../mockdata.js';
// import HourCard from '../lib/components/Hourcard.js';
// import DataProps from '../lib/components/DataProps.js';
// import LocalStorage from '../Mock/storageMock.js'
//
// describe('App', () => {
//
//   it('should exist', () => {
//     let wrapper = shallow(<App />);
//
//     expect(wrapper).toBeDefined();
//   });
//
//   it('should start with thisState.data as null', () => {
//     let wrapper = shallow(<App />);
//
//     expect(wrapper.state('data')).toEqual(null)
//   });
//
//   it('should render welcome component if local storage is clear', () => {
//     let wrapper = shallow(<App />);
//     let welcome = wrapper.find('.app-container');
//     let hidden = welcome.find('.body-hidden');
//
//     expect(hidden.prop('className')).toEqual('body-hidden')
//   });
//
//   it('should display current weather if local storage is used', () => {
//     let storage = new LocalStorage();
//     console.log(storage)
//     storage.setItem('wunderground', 'Denver CO')
//     let wrapper = shallow(<App />);
//     console.log(wrapper.debug())
//     let visible = welcome.find('.body-visible');
//     let welcome = wrapper.find('.app-container');
//
//   });
//
//
//
//
//
//
//
// ///
//
//
//   // it('should have a default status of closed and condition of empty object', () => {
//   //   expect(wrapper.state()).toEqual({ status: 'closed', condition: {} });
//   // });
//   //
//   // it('should change the status', () => {
//   //   expect(wrapper.state()).toEqual({ status: 'closed', condition: {} });
//   //   wrapper.setState({ status: 'open', condition: {} });
//   //   expect(wrapper.state()).toEqual({ status: 'open', condition: {} });
//   // });
//   //
//   // it('should display welcome page if status is closed', () => {
//   //   wrapper.setState({ status: 'closed', condition: {} });
//   //   let welcome = wrapper.find('input-container');
//   //   expect(welcome).not.toBe('move-input-container');
//   // });
//   //
//   // it('should not find move-h1', () => {
//   //   wrapper.setState({ status: 'closed', condition: {} })
//   //   let something = wrapper.find('move-h1');
//   //   expect(something).not.toBe('move-h1');
//   // });
//   //
//   // it('should display error page if status is set to error', () => {
//   //   wrapper.setState({ status: 'error', condition: {} });
//   //   let errorPage = wrapper.find('invalid');
//   //   expect(errorPage).toBeTruthy();
//   // });
//   //
//   // it('should display current weather if status is set to open', () => {
//   //   wrapper.setState({ status: 'open', condition: {} });
//   //   let current = wrapper.find('current-title');
//   //   expect(current).toBeTruthy();
//   // });
//   //
//   // it('should have identifying text on the current parent container', () => {
//   //   wrapper.setState({ status: 'open', condition: {} });
//   //   let name = wrapper.find('h3.current-title');
//   //   expect(name.text()).toEqual('CURRENTLY');
//   // })
//   //
//   // it('should have identifying text on the 7 hour parent container', () => {
//   //   wrapper.setState({ status: 'open', condition: {} });
//   //   let name = wrapper.find('h3.hour-title');
//   //   expect(name.text()).toEqual('7 HOUR');
//   // });
//   //
//   // it('should have identifying text on the 10 day parent container', () => {
//   //   wrapper.setState({ status: 'open', condition: {} });
//   //   let name = wrapper.find('h3.ten-day-title');
//   //   expect(name.text()).toEqual('TEN DAY');
//   // });
//   //
//   // it('should have identifying text on the error page', () => {
//   //   wrapper.setState({ status: 'error', condition: {} });
//   //   let error = wrapper.find('p.invalid');
//   //   expect(error.text()).toEqual('Invalid Location');
//   // });
// })
