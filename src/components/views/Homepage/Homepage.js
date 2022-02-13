import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import DealsBox from '../../features/DealsBox/DealsBox';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/Brands';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <DealsBox />
    <NewFurniture />
    <Feedback />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
