import React from 'react';
import { useParams } from 'react-router-dom';

import useGist from '../hooks/useGists';

const Gist = () => {
  const params = useParams();

  const { data, isLoading } = useGist(params.id);

  if (isLoading) return null;

  return (<h1>{JSON.stringify(data)}</h1>);
};

export default Gist;
