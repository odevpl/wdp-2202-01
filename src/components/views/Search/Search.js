import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Search.module.scss';

import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Search = () => (
  <div className={styles.root}>
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Search;
