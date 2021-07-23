import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useParams } from 'react-router';

import useConfig from '../hooks/useConfig';
import useGist from '../hooks/useGists';
import Page from '../components/Page';

import GistForm from '../components/forms/GistForm';

const getDefaultValues = (record) => ({
  title: record.title,
  modelName: record.modelName,
  steps: record.steps.map((step) => ({
    description: step.description,
  })),
});

const GistCreate = () => {
  const { id } = useParams();
  const { api } = useConfig();

  const { data: paintData } = useQuery('paints', () => axios(`${api}/paints`, { withCredentials: true }).then((res) => res.data));
  const { data: techniqueData } = useQuery('techniques', () => axios(`${api}/techniques`, { withCredentials: true }).then((res) => res.data));

  const { data: gist, isLoading } = useGist(id);

  if (isLoading) return null;

  return (
    <Page title="Edit Gist">
      <GistForm
        techniques={techniqueData}
        paints={paintData}
        defaultValues={getDefaultValues(gist)}
        editing
      />
    </Page>
  );
};

export default GistCreate;
