import { useMemo } from 'react';
import getConfig from '../utils/config';

const useConfig = () => useMemo(() => getConfig(), []);

export default useConfig;
