import React from 'react';
import { shallow } from 'enzyme';
import PromoSlider from './PromoSlider';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component PromoSlider', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <PromoSlider />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
