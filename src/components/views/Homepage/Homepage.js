import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import DealsBox from '../../features/DealsBox/DealsBox';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Promoted from '../../features/Promoted/Promoted';
import Gallery from '../../layout/Gallery/Gallery';
import HomeBlog from '../../layout/HomeBlog/HomeBlog';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <DealsBox />
    <NewFurniture />
    <Gallery />
    <Feedback />
    <HomeBlog />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
