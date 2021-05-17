import React from 'react';
import { useQuery } from 'react-query';

const Dashboard = () => {
  const { isLoading, error, data } = useQuery('gists', () => fetch('http://localhost:3000/gist').then((res) => res.json()));

  return (
    <div className="container">
      {JSON.stringify(data)}
    </div>
  );
};

export default Dashboard;
