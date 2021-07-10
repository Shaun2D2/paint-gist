import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Loader.scss';

const Loader = ({ fullPage }) => (
  <div className={classnames('app-loader', { 'app-loader--full-page': fullPage })}>
    <Spinner animation="border" role="status" />
  </div>
);

Loader.propTypes = {
  fullPage: PropTypes.bool,
};

Loader.defaultProps = {
  fullPage: false,
};

export default Loader;
