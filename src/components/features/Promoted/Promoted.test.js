import React from 'react';
import { shallow } from 'enzyme';
import Promoted from './Promoted';

describe('Component Promoted', () => {
  it('should render without crashing', () => {
    const component = shallow(<Promoted />);
    expect(component).toBeTruthy();
  });
});
