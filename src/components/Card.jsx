import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({ children }) => (
  <div className="app-card">
    <div className="app-card__body">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
