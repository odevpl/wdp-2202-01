import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import DealsBox from '../../features/DealsBox/DealsBox';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <DealsBox />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
