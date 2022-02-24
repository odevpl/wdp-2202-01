import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import NewFurniture from './NewFurniture';
import store from '../../../redux/store';

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <NewFurniture />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
