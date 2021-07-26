import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './Home.scss';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const Home = () => {
  const intl = useIntl();
  const [showForm, setShowForm] = useState(false);

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleToggle = (e) => {
    if (e) e.preventDefault();

    setShowForm(!showForm);
  };
  console.log(errors);
  const onSubmit = async (vals) => {
    try {
      const formData = new FormData();

      formData.append('email', vals.email);
      formData.append('form-name', 'newsletter');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.status > 200) {
        throw new Error();
      }

      toast.success(intl.formatMessage({ id: 'NEWSLETTER_SIGNUP_TOAST'}));

      handleToggle();
    } catch (e) {
      toast.error(intl.formatMessage({ id: 'GENERAL_ERROR' }));
    }
  };

  if (showForm) {
    return (
      <div className="home-landing">
        <div className="row" style={{ width: '100%' }}>
          <div className="col-sm-6 offset-sm-3 landing-form">
            <div className="signup-form">
              <p className="signup-form__content">{intl.formatMessage({ id: 'EMAIL_SIGNUP' })}</p>
              <form onSubmit={handleSubmit(onSubmit)} data-netlify>
                <div className="mb-3">
                  <label className="sign-form__label form-label" htmlFor="email">{intl.formatMessage({ id: 'FORM_EMAIL' })}</label>
                  <input type="text" name="email" className="form-control" aria-label="email address" {...register('email')} />
                  <div className="form-error">{errors?.email?.message}</div>
                </div>
                <div className="btn-right">
                  <button className="btn btn-outline-secondary" type="submit" id="button-addon2">{intl.formatMessage({ id: 'FORM_SUBMIT' })}</button>
                  <button className="btn btn-outlined-primary" type="button" onClick={handleToggle}>{intl.formatMessage({ id: 'NEVERMIND' })}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-landing">
      <div className="landing">
        <h1>
          Paint Gist
        </h1>
      </div>
      <a className="landing-button" href="#" onClick={handleToggle}>Sign up for updates</a>
    </div>
  );
};

export default Home;
