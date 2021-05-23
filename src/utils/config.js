// eslint-disable-next-line import/no-dynamic-require
const config = require(`../../config/${process.env.NODE_ENV}.js`);

const getConfig = () => config.default;

export default getConfig;
