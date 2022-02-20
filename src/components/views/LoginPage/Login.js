import React from 'react';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.root + ' mx-auto'}>
      <div className='container p-0'>
        <form className='d-flex flex-column justify-content-center'>
          <p className='m-2'> E - mail </p> <input type='text' className='py-2 mx-2' />
          <p className='m-2'> Password </p> <input type='text' className='py-2 mx-2' />
        </form>{' '}
        <p className={'m-2 ' + styles.forgotPassword}>
          Forgot password ? <a href='#'> Click here. </a>{' '}
        </p>{' '}
        <a
          className={'d-flex justify-content-center mx-auto m-3 ' + styles.button}
          href='/'
        >
          Login{' '}
        </a>{' '}
      </div>{' '}
    </div>
  );
};

export default Login;
