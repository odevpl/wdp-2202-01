import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faShoppingBasket,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import StarRating from '../../features/StarRating/StarRating';
import Button from '../../common/Button/Button';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.background}>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <h3>Furniture</h3>
            </div>
            <div className={`col-9 ${styles.nav}`}>
              <h6>
                <a href='#'>Home</a> {'>'} <a href='#'>Furniture</a> {'>'}{' '}
                <a href='#'>Chair</a>
              </h6>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className={styles.product}>
            <div className='row'>
              <div className={`col-5 ${styles.gallery}`}>
                <div className={styles.imageContainer}></div>
                <div className={styles.carousel}>
                  <button className={styles.arrow}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <div className={styles.thumbnails}>
                    <div className={styles.active}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <button className={styles.arrow}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>
              <div className={`col-7 ${styles.info}`}>
                <div className='container'>
                  <div className={`row ${styles.header}`}>
                    <div className='col-8'>
                      <h4>Sunbaby Magic Bear Chair</h4>
                    </div>
                    <div className={`col-4 ${styles.navArrows}`}>
                      <button className={styles.prodArrow}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </button>
                      <button className={styles.prodArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <h5 className={styles.oldPrice}>$350.00</h5>
                    <h5 className={styles.newPrice}>$250.00</h5>
                  </div>
                  <div className={`row ${styles.buttonSection}`}>
                    <div>
                      <Button variant='small'>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD
                        TO CART
                      </Button>
                    </div>
                    <div>
                      <Button noHover actionbtn variant='outline'>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                      </Button>
                    </div>
                    <div>
                      <Button
                        noHover
                        actionbtn
                        variant='outline'
                        className={styles.btnActive}
                      >
                        <FontAwesomeIcon
                          icon={faExchangeAlt}
                          className={styles.iconActive}
                        ></FontAwesomeIcon>
                      </Button>
                    </div>
                    <div>
                      <Button noHover actionbtn variant='outline'>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
