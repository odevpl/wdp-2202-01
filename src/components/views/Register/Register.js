import React from 'react';
import styles from './Register.module.scss';

class Register extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='row'>
          <div className='col-2'>
            <a href='#'>
              <img src='images/data-space-logo.png' alt='logo' />
            </a>
          </div>
          <div className={`col-6 ${styles.leftNavLink}`}>
            <a href='#'>Zarejestruj się</a>
          </div>
          <div className={`col-2 ${styles.rightNavLink}`}>
            <a href='#'>Zaloguj się</a>
          </div>
          <div className={`col-2 ${styles.rightNavLink}`}>
            <a href='#'>Zarejestruj się</a>
          </div>
        </div>
        <div className={`container ${styles.form}`}>
          <h5>Załóż konto</h5>
          <form>
            <div className='form-group row'>
              <label className='col-4 align-self-center'>Email</label>
              <input type='email' className='col-8 form-control' />
            </div>
            <div className='form-group row'>
              <label className='col-4 align-self-center'>Powtórz email</label>
              <input type='email' className='col-8 form-control' />
            </div>
            <div className='form-group row'>
              <label className='col-4'>Hasło</label>
              <input type='password' className='col-8 form-control' />
            </div>
            <div className='form-group row'>
              <label className='col-4'>Powtórz hasło</label>
              <input type='password' className='col-8 form-control' />
            </div>
            <div className='form-select row'>
              <label className='col-4 form-select-label' htmlFor='exampleCheck1'>
                Telefon
              </label>
              <select className='col-2 form-control' id='exampleFormControlSelect1'>
                <option>+48(PL)</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <input type='text' className='col-6 form-control' />
            </div>
            <div className={styles.agreements}>
              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label className='form-check-label' htmlFor='exampleCheck1'>
                  Akceptuję <a href='#'>warunki korzystania</a> z serwisu
                </label>
              </div>
              <br />
              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label className='form-check-label' htmlFor='exampleCheck1'>
                  Oświadczam, że zapoznałem się z{' '}
                  <a href='#'>obowiązkiem informacyjnym</a>, dotyczącym przetwarzania
                  danych osobowych
                </label>
              </div>
            </div>
            <div className={styles.submit}>
              <a className='col-3'>
                <a href='/' className={styles.submitButton}>
                  Załóż konto
                </a>
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
