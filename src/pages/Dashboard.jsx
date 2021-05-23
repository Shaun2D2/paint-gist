import React from 'react';
import { useQuery } from 'react-query';

import useConfig from '../hooks/useConfig';
import Page from '../components/Page';

const Dashboard = () => {
  const { api } = useConfig();

  const { isLoading, error, data } = useQuery('gists', () => fetch(`${api}/gists`).then((res) => res.json()));

  return (
    <Page title="Dashboard">
      {JSON.stringify(data)}
    </Page>
  );
};

export default Dashboard;
