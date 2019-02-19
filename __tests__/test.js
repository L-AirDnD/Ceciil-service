import React from 'react';
import Enzyme, { mount, render, shallow} from 'enzyme';
import App from '../client/src/components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('This is a test', () => {
  test('renders', () => {
    const a = shallow(<App />);
    expect(a.exists()).toBe(true);
  })
});