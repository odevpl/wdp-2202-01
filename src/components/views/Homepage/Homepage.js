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
import ChatBox from '../../features/ChatBox/ChatBox';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <DealsBox />
    <NewFurniture />
    <Gallery />
    <Feedback />
    <Brands />
    <ChatBox />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
