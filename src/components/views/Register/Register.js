import React from 'react';
import styles from './Register.module.scss';

class Register extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={`container ${styles.form}`}>
          <h5>Create an account</h5>
          <form>
            <div className='form-group row'>
              <label className='col-4 align-self-center'>Email</label>
              <input type='email' className='col-8 form-control' />
            </div>
            <div className='form-group row'>
              <label className='col-4 align-self-center'>Repeat email</label>
              <input type='email' className='col-8 form-control' />
            </div>
            <div className='form-group row'>
              <label className='col-4'>Password</label>
              <input type='password' className='col-8 form-control' />
            </div>
            <div className='form-group row'>
              <label className='col-4'>Repeat password</label>
              <input type='password' className='col-8 form-control' />
            </div>
            <div className='form-select row'>
              <label className='col-4 form-select-label' htmlFor='exampleCheck1'>
                Phone number
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
                  I agree to <a href='#'>the terms and conditions</a> of service use
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
                  I have read and accept <a href='#'>the Privacy Statement</a>
                </label>
              </div>
            </div>
            <div className={styles.submit}>
              <a className='col-3'>
                <a href='/' className={styles.submitButton}>
                  Create an account
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
