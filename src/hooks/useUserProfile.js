import axios from 'axios';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import getConfig from '../utils/config';

const { api } = getConfig();

const fetchUserProfile = () => axios(`${api}/auth/profile`, { withCredentials: true });

const useUserProfile = () => {
  const history = useHistory();

  const { isLoading, error, data } = useQuery('profile', () => fetchUserProfile(), {
    retry: false,
    onError: (err) => {
      if (err?.response?.status === 401) {
        history.push('/login');
      }
    },
  });

  const userData = data ? data.data : data;

  return {
    isLoading,
    error,
    data: userData,
  };
};

export default useUserProfile;
