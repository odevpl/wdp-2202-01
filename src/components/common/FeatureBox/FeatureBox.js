import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ icon, children }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={styles.root + (active ? ' ' + styles.active : '')}
    >
      <Link className={styles.link} to='/'>
        {icon && (
          <div className={styles.iconWrapper}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </Link>
    </div>
  );
};

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
};

export default FeatureBox;
