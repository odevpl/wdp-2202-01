import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './RegistrationForm.module.scss';

const registrationFormSchema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .min(3, 'First name cannot be shorter than 3 characters')
      .max(30, 'First name cannot be longer than 30 characters'),
    lastName: yup
      .string()
      .min(3, 'Last name cannot be shorter than 3 characters')
      .max(30, 'Last name cannot be longer than 30 characters'),
    email: yup
      .string()
      .email('Please provide a valid email')
      .required(),
    repeatEmail: yup
      .string()
      .email('Please provide a valid email')
      .oneOf([yup.ref('email'), null], 'emails must match')
      .required(),
    password: yup
      .string()
      .min(3, 'The password cannot be shorter than 3 characters')
      .required(),
    repeatPassword: yup
      .string()
      .min(3, 'The password cannot be shorter than 3 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required(),
    countryCode: yup.string().required(),
    phoneNumber: yup.string().matches(/\d{9}$/, {
      message: 'Please enter valid 9-digit number without spaces or special signs.',
      excludeEmptyString: false,
    }),
    termsCheckbox: yup
      .bool()
      .oneOf([true], 'Privacy settings must be accepted')
      .required(),
    privacyCheckbox: yup
      .bool()
      .oneOf([true], 'Privacy settings must be accepted')
      .required(),
  })
  .required();

const RegistrationForm = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registrationFormSchema) });

  const onSubmitHandler = data => {
    console.log(data);
    reset();
    history.push('/');
  };
  return (
    <div className={styles.form}>
      <h5>Create an account</h5>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='form-group row'>
          <label className='col-4 align-self-center'>First name</label>
          <span className='col-8'>
            <input className='form-control' {...register('firstName')} />
            <small className={errors.firstName ? styles.errorMessage : ''}>
              {errors.firstName?.message}
            </small>
          </span>
        </div>
        <div className='form-group row'>
          <label className='col-4 align-self-center'>Last name</label>
          <span className='col-8'>
            <input className='form-control' {...register('lastName')} />
            <small className={errors.lastName ? styles.errorMessage : ''}>
              {errors.lastName?.message}
            </small>
          </span>
        </div>
        <div className='form-group row'>
          <label className='col-4 align-self-center'>Email</label>
          <span className='col-8'>
            <input className='form-control' {...register('email')} />
            <small className={errors.email ? styles.errorMessage : ''}>
              {errors.email?.message}
            </small>
          </span>
        </div>
        <div className='form-group row'>
          <label className='col-4 align-self-center'>Repeat email</label>
          <span className='col-8'>
            <input className='form-control' {...register('repeatEmail')} />
            <small className={errors.repeatEmail ? styles.errorMessage : ''}>
              {errors.repeatEmail?.message}
            </small>
          </span>
        </div>
        <div className='form-group row'>
          <label className='col-4'>Password</label>
          <span className='col-8'>
            <input type='password' className='form-control' {...register('password')} />
            <small className={errors.password ? styles.errorMessage : ''}>
              {errors.password?.message}
            </small>
          </span>
        </div>
        <div className='form-group row'>
          <label className='col-4'>Repeat password</label>
          <span className='col-8'>
            <input
              type='password'
              className='form-control'
              {...register('repeatPassword')}
            />
            <small className={errors.repeatPassword ? styles.errorMessage : ''}>
              {errors.repeatPassword?.message}
            </small>
          </span>
        </div>
        <div className='form-select row'>
          <label className='col-4 form-select-label' htmlFor='exampleCheck1'>
            Phone number
          </label>
          <span className='col-8 d-flex flex-column'>
            <div className='d-flex'>
              <select
                className={styles.countryCode + ' form-control'}
                id='exampleFormControlSelect1'
                {...register('countryCode')}
              >
                <option>+48(PL)</option>
                <option>+00(NN)</option>
              </select>
              <input
                type='text'
                className='form-control'
                {...register('phoneNumber')}
              />
            </div>
            <small className={errors.phoneNumber ? styles.errorMessage : ''}>
              {errors.phoneNumber?.message}
            </small>
          </span>
        </div>
        <div className={styles.agreements}>
          <div className='form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              {...register('termsCheckbox')}
            />
            <label className='form-check-label'>
              I agree to <a href='#'>the terms and conditions</a> of service use
            </label>
          </div>
          <small className={errors.termsCheckbox ? styles.errorMessage : ''}>
            {errors.termsCheckbox?.message}
          </small>
          <br />
          <div className='form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              {...register('privacyCheckbox')}
            />
            <label className='form-check-label'>
              I have read and accept <a href='#'>the Privacy Statement</a>
            </label>
          </div>
          <small className={errors.privacyCheckbox ? styles.errorMessage : ''}>
            {errors.privacyCheckbox?.message}
          </small>
        </div>
        <div className={styles.submit}>
          <button className={styles.submitButton}>Create an account</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
