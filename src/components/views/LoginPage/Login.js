import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [userName, setUserName] = useState('');
  const [passowrd, setPassword] = useState('');

  const history = useHistory();

  const database = [
    {
      username: 'admin',
      password: 'pass',
    },
  ];

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  };

  const renderErrorMessages = name =>
    name === errorMessages.name && (
      <div className={styles.error + ' py-2 mx-2'}>{errorMessages.message}</div>
    );

  const handleSubmit = event => {
    event.preventDefault();

    const userData = database.find(user => user.username === userName);

    if (userData) {
      if (userData.password !== passowrd) {
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        return history.push(`/`);
      }
    } else {
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  return (
    <div className={styles.root + ' mx-auto'}>
      <div className='container p-0'>
        <form
          className='d-flex flex-column justify-content-center'
          onSubmit={handleSubmit}
        >
          <label className='m-2'> E - mail </label>
          <input
            onChange={e => setUserName(e.target.value)}
            type='text'
            name='uname'
            className='py-2 mx-2'
            required
          />

          <label className='m-2'> Password </label>
          <input
            onChange={e => setPassword(e.target.value)}
            type='password'
            name='pass'
            className='py-2 mx-2'
            required
          />

          <p className={'m-2 ' + styles.forgotPassword}>
            Forgot password ? <a href='#'> Click here. </a>{' '}
          </p>
          {renderErrorMessages('uname')}
          {renderErrorMessages('pass')}
          <button
            className={'d-flex justify-content-center mx-auto m-3 ' + styles.button}
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
