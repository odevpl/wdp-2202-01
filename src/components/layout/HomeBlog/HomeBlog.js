import React from 'react';
import { faCalendarAlt, faComments } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import styles from './HomeBlog.module.scss';

const HomeBlog = () => (
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
        <div className='col-4'>
          <div className={styles.blogImage}>
            <img
              src='src=../../images/banners/banner-small-top.jpg'
              alt='promotion furniture'
            />
            <div className={styles.blogArticle}>
              <div className='row text-center'>
                <div className='col-6'>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <span>15 JAN 2016</span>
                </div>
                <div className={'col-6 ' + styles.articleComment}>
                  <FontAwesomeIcon icon={faComments} />
                  <span>4 Comments</span>
                </div>
                <div className='col-12'>
                  <div className={styles.articleTitle}>
                    <h3>Products That Fight Static</h3>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.articleDescription}>
                    <span>
                      Curabitur rutrum urna venenatis, lobortis orci et, auctor justo.
                      Industry lorem Ipsum has been the industrys malesuada fames ac
                      ante ipsum primis in faucibus.
                    </span>
                  </div>
                </div>
                <div className={'col-12 ' + styles.articleButton}>
                  <Button variant='blog'>READ MORE</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className={styles.blogImage}>
            <img
              src='src=../../images/banners/banner-small-bottom.jpg'
              alt='promotion furniture'
            />
            <div className={styles.blogArticle}>
              <div className='row text-center'>
                <div className='col-6'>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <span>15 JAN 2016</span>
                </div>
                <div className={'col-6 ' + styles.blogComment}>
                  <FontAwesomeIcon icon={faComments} />
                  <span>4 Comments</span>
                </div>
                <div className='col-12'>
                  <div className={styles.articleTitle}>
                    <h3>Products That Fight Static</h3>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.articleDescription}>
                    <span>
                      Curabitur rutrum urna venenatis, lobortis orci et, auctor justo.
                      Industry lorem Ipsum has been the industrys malesuada fames ac
                      ante ipsum primis in faucibus.
                    </span>
                  </div>
                </div>
                <div className={'col-12 ' + styles.articleButton}>
                  <Button variant='blog'>READ MORE</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className={styles.blogImage}>
            <img
              src='src=../../images/banners/banner-large.jpg'
              alt='promotion furniture'
            />
            <div className={styles.blogArticle}>
              <div className='row text-center'>
                <div className='col-6'>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <span>15 JAN 2016</span>
                </div>
                <div className={'col-6 ' + styles.blogComment}>
                  <FontAwesomeIcon icon={faComments} />
                  <span>4 Comments</span>
                </div>
                <div className='col-12'>
                  <div className={styles.articleTitle}>
                    <h3>Products That Fight Static</h3>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.articleDescription}>
                    <span>
                      Curabitur rutrum urna venenatis, lobortis orci et, auctor justo.
                      Industry lorem Ipsum has been the industrys malesuada fames ac
                      ante ipsum primis in faucibus.
                    </span>
                  </div>
                </div>
                <div className={'col-12 ' + styles.articleButton}>
                  <Button variant='blog'>READ MORE</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeBlog;
