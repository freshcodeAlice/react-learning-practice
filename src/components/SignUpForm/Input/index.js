import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './Input.module.css';
import cx from 'classnames';

const Input = ({ name, ...rest }) => {
  return (
    <label>
      <Field name={name}>
        {({ field, form, meta }) => {
          console.log(meta);
          const classNames = cx(styles.input, {
            [styles.validInput]: meta.touched && !meta.error,
            [styles.invalidInput]: meta.touched && meta.error,
          });
          return (
            <input type='text' {...field} className={classNames} {...rest} />
          );
        }}
      </Field>
      <ErrorMessage name={name} />
    </label>
  );
};

export default Input;
