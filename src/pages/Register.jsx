import { useForm, FormProvider } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Button from '../components/forms/Button';
import Input from '../components/forms/Input';

import getConfig from '../utils/config';

const { api } = getConfig();

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  firstName: yup.string(),
  lastName: yup.string(),
  password: yup.string().required(),
});

const Register = () => {
  const intl = useIntl();
  const history = useHistory();
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values) => {
    try {
      await axios.post(`${api}/auth/register`, values, { withCredentials: true });

      history.push('/dashboard');
      toast.success(intl.formatMessage({ id: 'ACCOUNT_CREATED' }));
    } catch (e) {
      toast.error(intl.formatMessage({ id: 'GENERAL_ERROR' }));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h1>Registration</h1>
          <p>
            Lets paint some minis!  Already have an account?
            {' '}
            <Link to="/login">Login here</Link>
          </p>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input label={intl.formatMessage({ id: 'FORM_EMAIL' })} name="email" />
              <Input label={intl.formatMessage({ id: 'FORM_USERNAME' })} name="username" />
              <div className="row">
                <div className="col-sm-6">
                  <Input label={intl.formatMessage({ id: 'FORM_FIRSTNAME' })} name="firstName" />
                </div>
                <div className="col-sm-6">
                  <Input label={intl.formatMessage({ id: 'FORM_LASTNAME' })} name="lastName" />
                </div>
              </div>
              <Input label={intl.formatMessage({ id: 'FORM_PASSWORD' })} type="password" name="password" />
              <br />
              <Button type="submit" design="primary" text={intl.formatMessage({ id: 'FORM_SUBMIT' })} style={{ marginRight: 25 }} />
              <Button design="secondary" text={intl.formatMessage({ id: 'NEVERMIND' })} />
            </form>
          </FormProvider>

        </div>
      </div>
    </div>
  );
};

export default Register;
