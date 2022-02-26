import React from 'react';
import { shallow } from 'enzyme';
import ProductListItem from './ProductListItem';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component ProductListItem', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductListItem />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
