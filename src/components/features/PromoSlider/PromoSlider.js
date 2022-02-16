import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';

import ProductSlider from '../ProductSlider/ProductSlider';
import styles from './PromoSlider.module.scss';

const PromoSlider = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const timeOutRef = useRef();
  const products = useSelector(getAll);
  const hotDealProducts = products.filter(product => product.hotDeal === true);
  const previousProduct = () => {
    let product =
      activeProduct - 1 < 0 ? hotDealProducts.length - 1 : activeProduct - 1;
    setActiveProduct(product);
  };

  const handleProductChange = nextProduct => setActiveProduct(nextProduct);

  return (
    <div className={styles.promoContainer}>
      <img
        className={styles.image}
        src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 6.jpg`}
        alt='hot-deal'
      />
      <div className={styles.promoContent}>
        <h1>
          Indoor <span>Furniture</span>
        </h1>
        <h2>Save up to 50% of all furniture</h2>
        <Button className={styles.button}>Shop now</Button>
      </div>
      <div className={styles.sliderButtons}>
        <div className={styles.arrowLeft}>
          <a>
            <FontAwesomeIcon icon={faArrowLeft}>Add to compare</FontAwesomeIcon>
          </a>
        </div>
        <div className={styles.arrowRight}>
          <a>
            <FontAwesomeIcon icon={faArrowRight}>Add to compare</FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
