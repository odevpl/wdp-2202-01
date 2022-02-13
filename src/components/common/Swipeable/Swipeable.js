import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const Swipeable = ({ leftAction, rightAction, children }) => (
  <div>
    <div className={styles.wrapper}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faArrowAltCircleLeft}
        onClick={leftAction}
      />
      <FontAwesomeIcon
        className={styles.icon}
        icon={faArrowAltCircleRight}
        onClick={rightAction}
      />
    </div>
    {children}
  </div>
);

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
};

export default Swipeable;
