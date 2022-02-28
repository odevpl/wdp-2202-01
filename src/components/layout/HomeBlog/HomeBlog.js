import React from 'react';
import { faCalendarAlt, faComments } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import styles from './HomeBlog.module.scss';

const HomeBlog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className={'row no-gutters align-items-end'}>
            <div className={'col-auto ' + styles.heading}>
              <h3>LATEST BLOG</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a></a>
                </li>
                <li>
                  <a></a>
                </li>
                <li>
                  <a></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-4'>
            <div className={styles.article}>
              <div className={styles.imageContainer}>
                <img
                  src='src=../../images/banners/banner-small-bottom.jpg'
                  alt='promotion furniture'
                />
                <div className={styles.top}>
                  <p>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;<span>15 JAN 2016</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComments} />
                    &nbsp;<span>4 Comments</span>
                  </p>
                </div>
              </div>
              <div className={styles.articleBody}>
                <h3>Products That Fight Static</h3>
                <p>
                  Curabitur rutrum urna venenatis, lobortis orci et, auctor justo.
                  Industry lorem Ipsum has been the industrys malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
              <div className={styles.button}>
                <Button variant='blog'>READ MORE</Button>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <div className={styles.article}>
              <div className={styles.imageContainer}>
                <img
                  src='src=../../images/banners/banner-small-bottom.jpg'
                  alt='promotion furniture'
                />
                <div className={styles.top}>
                  <p>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;<span>15 JAN 2016</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComments} />
                    &nbsp;<span>4 Comments</span>
                  </p>
                </div>
              </div>
              <div className={styles.articleBody}>
                <h3>Products That Fight Static</h3>
                <p>
                  Curabitur rutrum urna venenatis, lobortis orci et, auctor justo.
                  Industry lorem Ipsum has been the industrys malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
              <div className={styles.button}>
                <Button variant='blog'>READ MORE</Button>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <div className={styles.article}>
              <div className={styles.imageContainer}>
                <img
                  src='src=../../images/banners/banner-small-bottom.jpg'
                  alt='promotion furniture'
                />
                <div className={styles.top}>
                  <p>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;<span>15 JAN 2016</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComments} />
                    &nbsp;<span>4 Comments</span>
                  </p>
                </div>
              </div>
              <div className={styles.articleBody}>
                <h3>Products That Fight Static</h3>
                <p>
                  Curabitur rutrum urna venenatis, lobortis orci et, auctor justo.
                  Industry lorem Ipsum has been the industrys malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
              <div className={styles.button}>
                <Button variant='blog'>READ MORE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
