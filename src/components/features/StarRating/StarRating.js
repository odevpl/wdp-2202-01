import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {
  addStarRating,
  editStarRating,
  getAllProductsRatedByUser,
} from '../../../redux/starRatingRedux';

import styles from './StarRating.module.scss';

const StarRating = ({ product }) => {
  const [hoveredStar, setHoveredStar] = useState(null);
  const dispatch = useDispatch();
  const productsRatedByUser = useSelector(getAllProductsRatedByUser);
  const productRatedByUser = productsRatedByUser.find(
    ratedProduct => ratedProduct.id === product.id
  );
  const stars = productRatedByUser ? productRatedByUser.userStars : product.stars;
  const toggleStarRatedByUser = () => {
    if (!productRatedByUser && hoveredStar) {
      dispatch(addStarRating({ ...product, userStars: hoveredStar }));
    } else if (hoveredStar) {
      dispatch(editStarRating({ ...product, userStars: hoveredStar }));
    }
  };
  const handleHover = e => {
    if (e.target.classList.contains('fa-star')) {
      setHoveredStar(e.target.getAttribute('data-id'));
    }
  };
  const pickIcon = i => {
    if (!hoveredStar) return faStar;
    if (hoveredStar < i) return farStar;
    return faStar;
  };
  return (
    <div className={styles.stars} onClick={toggleStarRatedByUser}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i}>
          {i <= stars ? (
            <FontAwesomeIcon
              icon={pickIcon(i)}
              className={productRatedByUser || hoveredStar >= i ? styles.userStar : ''}
              data-id={i}
              onMouseEnter={handleHover}
              onMouseLeave={() => setHoveredStar(null)}
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={hoveredStar >= i ? faStar : farStar}
              data-id={i}
              className={hoveredStar >= i ? styles.userStar : ''}
              onMouseEnter={handleHover}
              onMouseLeave={() => setHoveredStar(null)}
            >
              {i} stars
            </FontAwesomeIcon>
          )}
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  product: PropTypes.object,
};

export default StarRating;
