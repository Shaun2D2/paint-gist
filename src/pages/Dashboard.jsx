import React from 'react';
import { useQuery } from 'react-query';

import useConfig from '../hooks/useConfig';
import Page from '../components/Page';
import Input from '../components/forms/Input';
import GistCard from '../components/GistCard';

const Dashboard = () => {
  const { api } = useConfig();

  const { isLoading, error, data } = useQuery('gists', () => fetch(`${api}/gists`).then((res) => res.json()));

  if (isLoading) return null;

  return (
    <Page title="Dashboard">
      <div className="row">
        <div className="col-sm-12">
          <form>
            <Input placeholder="Search Your Gists..." />
          </form>
          <hr />
        </div>
      </div>

      <div className="row">
        { data.map((item) => (
          <div className="col-sm-4">
            <GistCard title={item.title} model={item.modelName} stepCount={item.steps.length} />
          </div>
        )) }
      </div>
    </Page>
  );
};

export default Dashboard;
