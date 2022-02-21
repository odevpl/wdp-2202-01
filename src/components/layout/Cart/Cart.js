import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h3>Cart</h3>
        <div className={styles.right}>
          <FontAwesomeIcon className={styles.sign} icon={faHome} />
          <FontAwesomeIcon className={styles.sign} icon={faChevronRight} />
          <p>Cart</p>
        </div>
      </div>
      <div className={styles.cart}>
        <table className='table'>
          <thead className={styles.tableTop}>
            <tr>
              <th scope='col' className='align-middle text-center'>
                PRODUCT
              </th>
              <th scope='col' className='align-middle text-left pl-3'>
                PRICE
              </th>
              <th scope='col' className='align-middle text-left'>
                QUANTITY
              </th>
              <th scope='col' className='align-middle text-center pl-3'>
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row' className={styles.product}>
                <FontAwesomeIcon className={styles.delete} icon={faTimes} />
                <div className={styles.image}></div>
                Placeholder Product 1
              </th>
              <td className='align-middle'>$5.00</td>
              <td className='align-middle'>
                <div className={styles.quantity}>
                  <Button className={styles.button1} variant='outline'>
                    +
                  </Button>
                  <div className={styles.number}>
                    <input></input>
                  </div>
                  <Button className={styles.button2} variant='outline'>
                    -
                  </Button>
                </div>
              </td>
              <td className='align-middle text-center pl-5'>$5.00</td>
            </tr>
            <tr>
              <th scope='row' className={styles.product}>
                <FontAwesomeIcon className={styles.delete} icon={faTimes} />
                <div className={styles.image}></div>
                Placeholder Product 2
              </th>
              <td className='align-middle'>$67.00</td>
              <td className='align-middle'>
                <div className={styles.quantity}>
                  <Button className={styles.button1} variant='outline'>
                    +
                  </Button>
                  <div className={styles.number}>
                    <input></input>
                  </div>
                  <Button className={styles.button2} variant='outline'>
                    -
                  </Button>
                </div>
              </td>
              <td className='align-middle text-center pl-5'>$67.00</td>
            </tr>
            <tr>
              <th scope='row' className={styles.product}>
                <FontAwesomeIcon className={styles.delete} icon={faTimes} />
                <div className={styles.image}></div>
                Placeholder Product 3 - Info1, Info2 90
              </th>
              <td className='align-middle'>$20.00</td>
              <td className='align-middle'>
                <div className={styles.quantity}>
                  <Button className={styles.button1} variant='outline'>
                    +
                  </Button>
                  <div className={styles.number}>
                    <input></input>
                  </div>
                  <Button className={styles.button2} variant='outline'>
                    -
                  </Button>
                </div>
              </td>
              <td className='align-middle text-center pl-5'>$20.00</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.coupon}>
          <input type='text' placeholder='Coupon code'></input>
          <Button className={styles.code} variant='small'>
            APPLY COUPON
          </Button>
          <Button className={styles.update} variant='small'>
            UPDATE CART
          </Button>
        </div>
      </div>
      <div className={styles.summary}>
        <h3 style={{ color: 'black' }}>Cart totals</h3>
        <div className={styles.subtotal}>
          <h5>Subtotal</h5>
          <p>$92.00</p>
        </div>
        <div className={styles.total}>
          <h5>Total</h5>
          <p>$92.00</p>
        </div>
        <Link to={`/`} className={styles.checkout}>
          <Button className={styles.checkout}>PROCEED TO CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
};

// Cart.propTypes = {};

export default Cart;
