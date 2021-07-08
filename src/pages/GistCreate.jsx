import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import useConfig from '../hooks/useConfig';
import Page from '../components/Page';

import GistForm from '../components/forms/GistForm';

const GistCreate = () => {
  const { api } = useConfig();

  const { data: paintData } = useQuery('paints', () => axios(`${api}/paints`, { withCredentials: true }).then((res) => res.data));
  const { data: techniqueData } = useQuery('techniques', () => axios(`${api}/techniques`, { withCredentials: true }).then((res) => res.data));

  return (
    <Page title="Create A Gist">
      <GistForm techniques={techniqueData} paints={paintData} />
    </Page>
  );
};

export default GistCreate;
