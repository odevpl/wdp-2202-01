import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

describe('Component Register', () => {
  it('should render without crashing', () => {
    const component = shallow(<Register />);
    expect(component).toBeTruthy();
  });
});
