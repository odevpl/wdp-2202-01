import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { addFavorite, removeFavorite } from '../../../redux/favoritesRedux';

const ProductBox = ({ name, price, promo, stars, ...props }) => {
  const dispatch = useDispatch();
  const handleToggleFavorite = () => {
    if (!props.favorite) {
      dispatch(
        addFavorite({
          page: props.page,
          index: props.index,
          ...props.product,
        })
      );
    } else {
      dispatch(removeFavorite(props.id));
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt={name}
            src={`${process.env.PUBLIC_URL}/images/products/${name}.jpg`}
          />
        </div>
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            noHover
            onClick={handleToggleFavorite}
            variant='outline'
            className={props.favorite && styles.btnActive}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={props.favorite && styles.iconActive}
            >
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button
            noHover
            variant='outline'
            className={props.addedForComparison && styles.btnActive}
          >
            <FontAwesomeIcon
              icon={faExchangeAlt}
              className={props.addedForComparison && styles.iconActive}
            >
              Add to compare
            </FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small' className={styles.priceButton}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.oneOf([true, '']),
  addedForComparison: PropTypes.bool,
  page: PropTypes.number,
  index: PropTypes.number,
  product: PropTypes.object,
};

export default ProductBox;
