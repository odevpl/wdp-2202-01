import React from 'react';
import { shallow } from 'enzyme';
import ProductSlider from './ProductSlider';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductSlider', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductSlider />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
