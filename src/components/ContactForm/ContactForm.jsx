import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormField, FieldFormik, ErrorMessage } from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()

    .min(2, 'Too Short!')

    .max(50, 'Too Long!')

    .required('Required'),

  lastName: Yup.string()

    .min(2, 'Too Short!')

    .max(50, 'Too Long!')

    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
});
