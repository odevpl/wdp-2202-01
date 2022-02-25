import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus,
  faChevronLeft,
  faChevronRight,
  faShoppingBasket,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
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
                  <div className={styles.bottomLine}></div>
                  <div className={styles.price}>
                    <h5 className={styles.oldPrice}>$350.00</h5>
                    <h5 className={styles.newPrice}>$250.00</h5>
                  </div>
                  <div className={styles.bottomLine}></div>
                  <div className={`row ${styles.buttonSection}`}>
                    <div>
                      <Button variant='small' className={styles.cart}>
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
                  <div className={`row ${styles.quantity}`}>
                    <p>Quantity:</p>
                    <input className type='number' value='2' />
                    <div>
                      <Button variant='outline' noHover actionbtn>
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                    </div>
                    <div>
                      <Button variant='outline' noHover actionbtn>
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </div>
                  </div>
                  <div className={styles.bottomLine}></div>
                  <div className={styles.overview}>
                    <h6>Quick Overview</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam ea sed id eos quia quas placeat. Architecto, laboriosam
                      tenetur!
                    </p>
                  </div>
                  <div className={styles.bottomLine}></div>
                  <div className={`row ${styles.properties}`}>
                    <div className='col-2'>
                      <p className={styles.property}>Availability:</p>
                    </div>
                    <div className='col-10'>
                      <p className={styles.propertyValue}>In Stock</p>
                    </div>
                  </div>
                  <div className={`row ${styles.properties}`}>
                    <div className='col-2'>
                      <p className={styles.property}>Category:</p>
                    </div>
                    <div className='col-10'>
                      <p className={styles.propertyValue}>Furniture</p>
                    </div>
                  </div>
                  <div className={styles.bottomLine}></div>
                  <div className={`row ${styles.links}`}>
                    <div>
                      <Button variant='outline' noHover actionbtn>
                        <FontAwesomeIcon icon={faFacebookF} /> Share
                      </Button>
                    </div>
                    <div>
                      <Button variant='outline' noHover actionbtn>
                        <FontAwesomeIcon
                          icon={faGooglePlusG}
                          className={styles.googleplus}
                        />
                        Google+
                      </Button>
                    </div>
                    <div>
                      <Button variant='outline' noHover actionbtn>
                        <FontAwesomeIcon icon={faTwitter} className={styles.twitter} />
                        Tweet
                      </Button>
                    </div>
                    <div>
                      <Button variant='outline' noHover actionbtn>
                        <FontAwesomeIcon
                          icon={faPinterestP}
                          className={styles.pinterest}
                        />
                        Pinterest
                      </Button>
                    </div>
                    <div>
                      <Button variant='outline' noHover actionbtn>
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className={styles.linkedin}
                        />
                        LinkedIn
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
