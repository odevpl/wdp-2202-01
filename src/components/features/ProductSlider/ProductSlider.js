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
import { getAll } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import StarRating from '../StarRating/StarRating';
import styles from './ProductSlider.module.scss';

const ProductSlider = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const timeOutRef = useRef();
  const products = useSelector(getAll);
  const hotDealProducts = products.filter(product => product.hotDeal === true);

  const handleProductChange = nextProduct => setActiveProduct(nextProduct);
  useEffect(() => {
    const nextProduct = () => {
      let product = activeProduct + 1 < hotDealProducts.length ? activeProduct + 1 : 0;
      setActiveProduct(product);
    };
    if (!sliderPaused) {
      const id = setTimeout(nextProduct, 3000);
      timeOutRef.current = id;
    }

    return () => clearTimeout(timeOutRef.current);
  }, [activeProduct, sliderPaused, hotDealProducts.length]);
  const handleClickOnDot = dot => {
    setActiveProduct(dot);
    setSliderPaused(true);
    clearTimeout(timeOutRef);
    setTimeout(() => {
      setSliderPaused(false);
      setActiveProduct(activeProduct => activeProduct + 1);
    }, 10000);
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
        {hotDealProducts.map(hotDealProduct => {
          return (
            <React.Fragment key={hotDealProduct.id}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 2.jpg`}
                  alt='hot-deal'
                />
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
                <h5>{hotDealProduct.name}</h5>
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
                    $ {hotDealProduct.price + 50}
                  </div>
                  <Button noHover variant='small' className={styles.priceButton}>
                    $ {hotDealProduct.price}
                  </Button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </SwipeableViews>
    </div>
  );
};

export default ProductSlider;
