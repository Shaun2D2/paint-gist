import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import React from 'react';
import axios from 'axios';

import Button from '../components/forms/Button';
import Input from '../components/forms/Input';

import getConfig from '../utils/config';

const { api } = getConfig();

const Register = () => {
  const intl = useIntl();
  const history = useHistory();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (values) => {
    try {
      await axios.post(`${api}/auth/register`, values, { withCredentials: true });

      history.push('/dashboard');
    } catch (e) {
        // do some error handling here...
      console.log(e);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h1>Registration</h1>
          <p>Lets get some paint on some minis!  Already have an account?  <Link to="/login">Login here</Link></p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input label={intl.formatMessage({ id: 'FORM_EMAIL' })} {...register('email')} />
            <Input label={intl.formatMessage({ id: 'FORM_USERNAME' })} {...register('username')} />
            <div className="row">
              <div className="col-sm-6">
                <Input label={intl.formatMessage({ id: 'FORM_FIRSTNAME' })} {...register('firstName')} />
              </div>
              <div className="col-sm-6">
                <Input label={intl.formatMessage({ id: 'FORM_LASTNAME' })} {...register('lastName')} />
              </div>
            </div>
            <Input label={intl.formatMessage({ id: 'FORM_PASSWORD' })} type="password" {...register('password')} />
            <br />
            <Button type="submit" design="primary" text={intl.formatMessage({ id: 'FORM_SUBMIT' })} style={{ marginRight: 25 }} />
            <Button design="secondary" text={intl.formatMessage({ id: 'NEVERMIND' })} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
