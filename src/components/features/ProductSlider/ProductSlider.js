import {
  faExchangeAlt,
  faHeart,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import SwipeableViews from 'react-swipeable-views';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAll } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import StarRating from '../StarRating/StarRating';
import styles from './ProductSlider.module.scss';

const ProductSlider = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const sliderPauseTimerRef = useRef();
  const timeOutRef = useRef();
  const products = useSelector(getAll);
  const hotDealProducts = products.filter(product => product.hotDeal === true);

  const handleProductChange = nextProduct => setActiveProduct(nextProduct);
  const nextProduct = () => {
    let product = activeProduct + 1 < hotDealProducts.length ? activeProduct + 1 : 0;
    setActiveProduct(product);
  };
  useEffect(() => {
    if (!sliderPaused) {
      const id = setTimeout(nextProduct, 3000);
      timeOutRef.current = id;
    }

    return () => clearTimeout(timeOutRef.current);
  }, [activeProduct, sliderPaused, hotDealProducts.length, nextProduct]);
  const handleClickOnDot = dot => {
    setSliderPaused(true);
    setActiveProduct(dot);
    clearTimeout(timeOutRef.current);

    if (!sliderPauseTimerRef.current) {
      sliderPauseTimerRef.current = setTimeout(() => {
        setSliderPaused(false);
        sliderPauseTimerRef.current = null;
      }, 7000);
    }
  };

  return (
    <div className={styles.hotDealPanel}>
      <div className={styles.dealsBar}>
        <h3>Hot Deals</h3>
        <ul>
          {[0, 1, 2].map(dot => (
            <li key={dot}>
              <a
                className={
                  activeProduct === dot || (activeProduct > dot && dot === 2)
                    ? styles.active
                    : ''
                }
                onClick={() => handleClickOnDot(dot)}
              >
                {' '}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <SwipeableViews
        enableMouseEvents
        index={activeProduct}
        onChangeIndex={index => {
          handleProductChange(index);
        }}
        slideStyle={{ overflow: 'hidden' }}
      >
        {hotDealProducts.map((hotDealProduct, index) => {
          return (
            <div
              key={hotDealProduct.id}
              className={index === activeProduct ? styles.productContainer : ''}
            >
              <div className={styles.imageContainer}>
                <NavLink to={`product/${hotDealProduct.id}`}>
                  <img
                    className={styles.image}
                    src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 2.jpg`}
                    alt='hot-deal'
                  />
                </NavLink>
                <Button className={styles.button} variant='small'>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                  Add to cart
                </Button>
                <div className={styles.discountTime}>
                  <div className={styles.circle}>
                    <span>25</span>Days
                  </div>
                  <div className={styles.circle}>
                    <span>25</span>Hrs
                  </div>
                  <div className={styles.circle}>
                    <span>25</span>Mins
                  </div>
                  <div className={styles.circle}>
                    <span>25</span>Secs
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <NavLink to={`product/${hotDealProduct.id}`}>
                  <h5>{hotDealProduct.name}</h5>
                </NavLink>
                <StarRating product={hotDealProduct} />
                <div className={styles.line}></div>
              </div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faEye}>Add to compare</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.price}>
                  <div className={styles.previousPrice}>
                    $ {hotDealProduct.oldPrice}
                  </div>
                  <Button noHover variant='small' className={styles.priceButton}>
                    $ {hotDealProduct.price}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
};

export default ProductSlider;
