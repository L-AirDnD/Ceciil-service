import React from 'react';
import Enzyme, { mount, render, shallow} from 'enzyme';
import App from '../client/src/components/App.jsx';
import Modal from '../client/src/components/Modal.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('App', () => {
  test('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  test('should not show modal upon rendering', () => {
    const wrapper = shallow(<App />);
    const showState = wrapper.state().show;
    expect(showState).toEqual(false);
  });
});

describe('Modal', () => {
  test('should render modal on button click', () => {
    const wrapper = mount(<App />);
    wrapper
      .find('button')
      .simulate('click');
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount;
  });
  test('should render previous photo by clicking L', () => {
    const wrapper = shallow(<Modal />);
    const left = wrapper.find('Left');
    left
      .simulate('click')
    expect(left).to.have.length(1);
    expect(left).toMatchSnapshot();
  })
  test('should render next photo by clicking R', () => {
    const wrapper = shallow(<Modal />);
    const right = wrapper.find('Right');
    right
      .simulate('click')
    expect(right).to.have.length(1);
    expect(right).toMatchSnapshot();
  })
});
