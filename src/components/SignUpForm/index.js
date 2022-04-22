import React, { Component } from 'react';
import { object, string, number, date, email } from 'yup';
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from './Input';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function SignUpForm (props) {
  const formikSubmit = (values, formikBag) => {
    console.log(values, formikBag);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formikSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <Input name='email' />
            <Field type='text' name='password' />
            <ErrorMessage name='password' component='p' />
            <button type='submit'>Submit!</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
