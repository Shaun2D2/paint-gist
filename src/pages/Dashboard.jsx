import React from 'react';
import { useQuery } from 'react-query';

import useConfig from '../hooks/useConfig';

const Dashboard = () => {
  const { api } = useConfig();

  const { isLoading, error, data } = useQuery('gists', () => fetch(`${api}/gists`).then((res) => res.json()));

  return (
    <div className="container">
      {JSON.stringify(data)}
    </div>
  );
};

export default Dashboard;
