import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
