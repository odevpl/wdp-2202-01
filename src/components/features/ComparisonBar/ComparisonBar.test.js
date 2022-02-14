import React from 'react';
import { shallow } from 'enzyme';
import ComparisonBar from './ComparisonBar';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ComparisonBar />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
