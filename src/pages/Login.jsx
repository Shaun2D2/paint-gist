import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import axios from 'axios';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../components/forms/Button';
import Input from '../components/forms/Input';

import getConfig from '../utils/config';

const { api } = getConfig();

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const [processing, setProcessing] = useState(false);

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const intl = useIntl();
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      setProcessing(true);

      await axios.post(`${api}/auth`, values, { withCredentials: true });

      history.push('/dashboard');

      toast.success(intl.formatMessage({ id: 'LOGIN_SUCCESS' }));
    } catch (e) {
      setProcessing(false);
      if (e?.response?.status === 401) {
        toast.error(intl.formatMessage({ id: 'LOGIN_FAILED' }));
        return;
      }

      toast.error(intl.formatMessage({ id: 'GENERAL_ERROR' }));
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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" label="Email" />
              <Input name="password" type="password" label="Password" />
              <Button design="primary" text="Submit" type="submit" disabled={processing} />
            </form>
          </FormProvider>

        </div>
      </div>
    </div>

  );
};

export default Login;
