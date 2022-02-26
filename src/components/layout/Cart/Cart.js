import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  getAllProductsInCart,
  removeProduct,
} from '../../../redux/cartRedux';

const Cart = () => {
  const productsInCart = useSelector(getAllProductsInCart);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeProduct(id));
  };

  const clearProductsFromCart = () => {
    dispatch(clearCart([]));
  };
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
            {productsInCart.map(product => (
              <tr key={product.id}>
                <th scope='row' className={styles.product}>
                  <FontAwesomeIcon
                    className={styles.delete}
                    icon={faTimes}
                    onClick={() => handleDelete(product.id)}
                  />
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.image}
                      alt={product.name}
                      src={`${process.env.PUBLIC_URL}/images/products/${product.name}.jpg`}
                    />
                  </div>
                  {product.name}
                </th>
                <td className='align-middle'>$ {product.price}</td>
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
                <td className='align-middle text-center pl-5'>$ {product.price}</td>
              </tr>
            ))}
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
        <Link to={`/cart`} className={styles.checkout}>
          <Button onClick={() => clearProductsFromCart()} className={styles.checkout}>
            PROCEED TO CHECKOUT
          </Button>
        </Link>
      </div>
    </div>
  );
};

// Cart.propTypes = {};

export default Cart;
