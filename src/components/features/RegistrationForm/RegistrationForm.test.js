import React from 'react';
import { shallow } from 'enzyme';
import RegistrationForm from './RegistrationForm';

describe('Component RegistrationForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<RegistrationForm />);
    expect(component).toBeTruthy();
  });
});
