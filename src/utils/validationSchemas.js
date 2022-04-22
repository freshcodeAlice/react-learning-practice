import * as Yup from 'yup';

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string()
    .matches(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/, 'Type valid email')
    .required(),
  password: Yup.string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
    .required(),
});
