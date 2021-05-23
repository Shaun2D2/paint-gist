import React from 'react';
import { useQuery } from 'react-query';

import useConfig from '../hooks/useConfig';
import Page from '../components/Page';
import Card from '../components/Card';

import GistForm from '../components/forms/GistForm';

const GistCreate = () => {
  const { api } = useConfig();

  const { data: paintData } = useQuery('paints', () => fetch(`${api}/paints`).then((res) => res.json()));
  const { data: techniqueData } = useQuery('techniques', () => fetch(`${api}/techniques`).then((res) => res.json()));

  return (
    <Page title="Create A Gist">
      <Card>
        <GistForm techniques={techniqueData} paints={paintData} />
      </Card>
    </Page>
  );
};

export default GistCreate;
