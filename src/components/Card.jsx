import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, title, imageUrl }) => (
  <div className="card mb-5 mt-5">
    {title && (<h5 className="card-title">{title}</h5>)}
    {imageUrl && (<img className="card-img-top" src={imageUrl} alt="title" />)}
    <div className="card-body">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};

Card.defaultProps = {
  title: null,
  imageUrl: null,
};

export default Card;
