import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import QuickViewModal from '../../features/QuickViewModal/QuickViewModal';
import { addFavorite, removeFavorite } from '../../../redux/favoritesRedux';

import {
  addComparedProduct,
  removeComparedProduct,
} from '../../../redux/comparedProductsRedux';
import StarRating from '../../features/StarRating/StarRating';
import { NavLink } from 'react-router-dom';
import { addProduct, getAllProductsInCart } from '../../../redux/cartRedux';

const ProductBox = ({ name, price, promo, id, ...props }) => {
  const dispatch = useDispatch();
  const [openQuickView, setOpenQuickView] = useState(false);
  const toggleFavorite = () => {
    if (!props.favorite) {
      dispatch(addFavorite(props.product));
    } else {
      dispatch(removeFavorite(props.id));
    }
  };
  const toggleAddedForComparison = () => {
    if (!props.addedForComparison) {
      dispatch(addComparedProduct(props.product));
    } else {
      dispatch(removeComparedProduct(props.id));
    }
  };

  const handleAddProduct = event => {
    event.preventDefault();
    dispatch(addProduct({ name, id, price }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.imageContainer}>
          <NavLink to={`/product/${props.id}`}>
            <img
              className={styles.image}
              alt={name}
              src={`${process.env.PUBLIC_URL}/images/products/${name}.jpg`}
            />
          </NavLink>
        </div>
        <div className={styles.buttons}>
          <Button variant='small' onClick={() => setOpenQuickView(true)}>
            Quick View
          </Button>
          <Button variant='small' onClick={handleAddProduct}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <StarRating product={props.product} />

        <NavLink to={`/product/${props.id}`}>
          <h5>{name}</h5>
        </NavLink>
        <StarRating product={props.product} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            noHover
            actionbtn
            onClick={toggleFavorite}
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
            actionbtn
            onClick={toggleAddedForComparison}
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
      <QuickViewModal
        product={props.product}
        show={openQuickView}
        handleClose={() => setOpenQuickView(false)}
      />
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  favorite: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  addedForComparison: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  product: PropTypes.object,
};

export default ProductBox;
