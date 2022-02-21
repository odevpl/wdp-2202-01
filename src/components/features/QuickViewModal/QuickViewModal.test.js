import React from 'react';
import { shallow } from 'enzyme';
import QuickViewModal from './QuickViewModal';

describe('Component QuickViewModal', () => {
  it('should render without crashing', () => {
    const component = shallow(<QuickViewModal />);
    expect(component).toBeTruthy();
  });
});
