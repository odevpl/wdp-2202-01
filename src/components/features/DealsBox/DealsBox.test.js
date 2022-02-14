import React from 'react';
import { shallow } from 'enzyme';
import DealsBox from './DealsBox';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component DealsBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <DealsBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
