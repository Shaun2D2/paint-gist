import React from 'react';
import { useQuery } from 'react-query';

import Card from '../components/Card';

const Home = () => {
  const { isLoading, error, data } = useQuery('gists', () => fetch('http://localhost:3000/gist').then((res) => res.json()));

  if (!data) return null;

  return (
    <div className="container">
      <div className="row">
        { data.map((item) => (
          <div className="col-sm-3">
            <Card>{item.modelName}</Card>
          </div>
        )) }
      </div>
    </div>
  );
};

export default Home;
