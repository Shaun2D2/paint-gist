import axios from 'axios';
import { useQuery } from 'react-query';

import getConfig from '../utils/config';

const { api } = getConfig();

const fetchUserGists = (id) => axios(`${api}/users/${id}/gists`, { withCredentials: true });

const useUserGists = (id) => {
  const { isLoading, error, data } = useQuery('gists', () => fetchUserGists(id));

  const gistData = data ? data.data : data;

  return {
    isLoading,
    error,
    data: gistData,
  };
};

export default useUserGists;
