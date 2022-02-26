import React from 'react';
import { shallow } from 'enzyme';
import ProductsSelectedByCategory from './ProductSelectedByCategory';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductsSelectedByCategory', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductsSelectedByCategory />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
