import {
  faExchangeAlt,
  faHeart,
  faShoppingBasket,
  faStar,
  faEye,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import styles from './Promoted.module.scss';
import { NavLink } from 'react-router-dom';

const Promoted = () => {
  const products = useSelector(getAll);
  const hotDealProduct = products.find(product => product.deal === true);

  const dots = [];
  for (let i = 0; i < 3; i++) {
    dots.push(
      <li>
        <a> </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container d-flex'>
        <div className='col-4 pl-0'>
          <div className={styles.hotDealPanel}>
            <div className={styles.dealsBar}>
              <h3>Hot Deals</h3>
              <ul>{dots}</ul>
            </div>
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
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= hotDealProduct.stars ? (
                      <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
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
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
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
          </div>
        </div>
        <div className='col-8 pr-0'>
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
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={hotDealProduct.addedForComparison && styles.iconActive}
                  >
                    Add to compare
                  </FontAwesomeIcon>
                </a>
              </div>
              <div className={styles.arrowRight}>
                <a>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={hotDealProduct.addedForComparison && styles.iconActive}
                  >
                    Add to compare
                  </FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
