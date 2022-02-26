import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faSearch,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

import { addFavorite, removeFavorite } from '../../../redux/favoritesRedux';
import { getAllFavorites } from '../../../redux/favoritesRedux';
import { getAllComparedProducts } from '../../../redux/comparedProductsRedux';
import styles from './ProductListItem.module.scss';

import {
  addComparedProduct,
  removeComparedProduct,
} from '../../../redux/comparedProductsRedux';
import { NavLink } from 'react-router-dom';
import StarRating from '../../features/StarRating/StarRating';

const ProductListItem = ({ name, price, promo, ...props }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(getAllFavorites);
  const comparedProducts = useSelector(getAllComparedProducts);
  const toggleFavorite = () => {
    if (!favorite) {
      dispatch(addFavorite(props.product));
    } else {
      dispatch(removeFavorite(props.id));
    }
  };
  const toggleAddedForComparison = () => {
    if (!addedForComparison) {
      dispatch(addComparedProduct(props.product));
    } else {
      dispatch(removeComparedProduct(props.id));
    }
  };
  const favorite = favorites.find(item => item.id === props.product.id) ? true : '';
  const addedForComparison = comparedProducts.find(item => item.id === props.product.id)
    ? true
    : '';

  return (
    <div className={styles.root + ' row'}>
      <div className='col-4 p-0'>
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
        </div>
      </div>
      <div className='col-8 p-0'>
        <div className={styles.content}>
          <NavLink to={`/product/${props.id}`}>
            <h5>{name}</h5>
          </NavLink>
          <div className={styles.price}>
            <strong>${price}</strong>
          </div>
          <StarRating product={props.product} />
          <p className={styles.description}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores.
          </p>
          <div className={styles.line}></div>
          <div className={styles.actions}>
            <Button
              noHover
              actionbtn
              onClick={toggleFavorite}
              variant='outline'
              className={favorite && styles.btnActive}
            >
              <FontAwesomeIcon icon={faHeart} className={favorite && styles.iconActive}>
                Favorite
              </FontAwesomeIcon>
            </Button>

            <Button
              noHover
              actionbtn
              onClick={toggleAddedForComparison}
              variant='outline'
              className={addedForComparison && styles.btnActive}
            >
              <FontAwesomeIcon
                icon={faExchangeAlt}
                className={addedForComparison && styles.iconActive}
              >
                Add to compare
              </FontAwesomeIcon>
            </Button>
            <Button noHover actionbtn variant='outline'>
              <FontAwesomeIcon icon={faSearch}>Lookup</FontAwesomeIcon>
            </Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  product: PropTypes.object,
};

export default ProductListItem;
