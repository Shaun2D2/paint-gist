import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, title }) => (
  <div className="card">
    {title && (<h5 className="card-title">{title}</h5>)}
    <div className="card-body">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;