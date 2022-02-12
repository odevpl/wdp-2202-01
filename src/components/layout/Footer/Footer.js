import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-lg-6'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Policy</a>
                </li>
                <li>
                  <a href='#'>Conditions</a>
                </li>
                <li>
                  <a href='#'>Online support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-6'>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <a href='#'>Login</a>
                </li>
                <li>
                  <a href='#'>My cart</a>
                </li>
                <li>
                  <a href='#'>Wishlist</a>
                </li>
                <li>
                  <a href='#'>Checkout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-6'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#'>Specials</a>
                </li>
                <li>
                  <a href='#'>New products</a>
                </li>
                <li>
                  <a href='#'>Best Sellers</a>
                </li>
                <li>
                  <a href='#'>Out Stores</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-6'>
            <div className={styles.menuWrapper}>
              <h6>Orders</h6>
              <ul>
                <li>
                  <a href='#'>Payment options</a>
                </li>
                <li>
                  <a href='#'>Shipping and delivery</a>
                </li>
                <li>
                  <a href='#'>Returns</a>
                </li>
                <li>
                  <a href='#'>Shipping</a>
                </li>
              </ul>
              <img
                className='w-md-75'
                src='./images/cards.png'
                alt='Supported credit cards'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-12 col-lg-4 text-center'></div>
          <div
            className={
              ' col-12 col-md-6 col-lg-4 text-center text-md-start ' + styles.copyright
            }
          >
            <p>©Copyright 2016 Bazar | All Rights Reserved</p>
          </div>
          <div
            className={
              'col-12 col-md-6 col-lg-4 text-center text-md-right ' + styles.socialMedia
            }
          >
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
