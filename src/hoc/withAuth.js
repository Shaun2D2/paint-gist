/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Loader from '../components/Loader';
import useUserProfile from '../hooks/useUserProfile';

const withAuth = (Component) => (props) => {
  const { isLoading, data } = useUserProfile();

  if (isLoading) return <Loader fullPage />;

  return <Component user={data} {...props} />;
};

export default withAuth;
