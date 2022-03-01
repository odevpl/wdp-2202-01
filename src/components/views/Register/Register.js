import React from 'react';
import RegistrationForm from '../../features/RegistrationForm/RegistrationForm';
import styles from './Register.module.scss';

class Register extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <RegistrationForm />
      </div>
    );
  }
}

export default Register;
