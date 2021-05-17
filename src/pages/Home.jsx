import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import Card from '../components/Card';
import Input from '../components/forms/Input';

const Home = () => {
  const { isLoading, error, data } = useQuery('gists', () => fetch('http://localhost:3000/gist').then((res) => res.json()));

  if (!data) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <form>
            <Input placeholder="Search Gists..." />
          </form>

        </div>
        { data.map((item) => (
          <div className="col-sm-3">
            <Card imageUrl="http://placehold.it/350/150">
              <p>{item.modelName}</p>
              <Link to={`/gist/${item.id}`}>View</Link>
            </Card>
          </div>
        )) }
      </div>
    </div>
  );
};

export default Home;
