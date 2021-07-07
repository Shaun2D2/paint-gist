import 'regenerator-runtime/runtime';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import React from 'react';
import axios from 'axios';

import Button from '../components/forms/Button';
import Input from '../components/forms/Input';
import Card from '../components/Card';

import getConfig from '../utils/config';

const { api } = getConfig();

const Register = () => {
  const intl = useIntl();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(`${api}/auth/register`, values);

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <Card title={intl.formatMessage({ id: 'REGISTRATION' })}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input label={intl.formatMessage({ id: 'FORM_EMAIL' })} {...register('email')} />
              <Input label={intl.formatMessage({ id: 'FORM_USERNAME' })} {...register('username')} />
              <Input label={intl.formatMessage({ id: 'FORM_FIRSTNAME' })} {...register('firstName')} />
              <Input label={intl.formatMessage({ id: 'FORM_LASTNAME' })} {...register('lastName')} />
              <Input label={intl.formatMessage({ id: 'FORM_PASSWORD' })} type="password" {...register('password')} />
              <br />
              <Button type="submit" design="primary" text={intl.formatMessage({ id: 'FORM_SUBMIT' })} style={{ marginRight: 25 }} />
              <Button design="secondary" text={intl.formatMessage({ id: 'NEVERMIND' })} />
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
