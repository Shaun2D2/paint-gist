import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import axios from 'axios';

import Button from '../components/forms/Button';
import Input from '../components/forms/Input';

import getConfig from '../utils/config';

const { api } = getConfig();

const Login = () => {
  const { handleSubmit, register } = useForm();
  const intl = useIntl();
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      await axios.post(`${api}/auth`, values);

      history.push('/dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h1>{intl.formatMessage({ id: 'WELCOME_BACK' })}</h1>
          <p>
            {intl.formatMessage({ id: 'WELCOME_BACK' })}
            {' '}
            {intl.formatMessage({ id: 'NO_ACCOUNT_YET' })}
            {' '}
            <Link to="/register">{intl.formatMessage({ id: 'REGISTER_NOW' })}</Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email')} label="Email" />
            <Input {...register('password')} label="Password" type="password" />
            <Button design="primary" text="Submit" type="submit" />
          </form>

        </div>
      </div>
    </div>

  );
};

export default Login;
