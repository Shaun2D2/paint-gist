import axios from 'axios';
import { useQuery } from 'react-query';

import getConfig from '../utils/config';

const { api } = getConfig();

const fetchGist = (id) => axios(`${api}/gists/${id}`, { withCredentials: true });

const useGist = (id) => {
  const { isLoading, error, data } = useQuery(['gists', { id }], () => fetchGist(id));

  const gistData = data ? data.data : data;

  return {
    isLoading,
    error,
    data: gistData,
  };
};

export default useGist;
