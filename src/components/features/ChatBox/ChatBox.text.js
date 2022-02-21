import React from 'react';
import { shallow } from 'enzyme';
import ChatBox from './ChatBox';

describe('Component ChatBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ChatBox />);
    expect(component).toBeTruthy();
  });
});
