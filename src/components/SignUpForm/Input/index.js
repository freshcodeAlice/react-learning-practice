import React from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import styles from './Input.module.css';
import cx from 'classnames';

const Input = ({ name, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  const classNames = cx(styles.input, {
    [styles.validInput]: meta.touched && !meta.error,
    [styles.invalidInput]: meta.touched && meta.error,
  });
  return (
    <label>
      <input type='text' {...field} className={classNames} {...rest} />
      <ErrorMessage name={name} />
    </label>
  );
};

export default Input;
