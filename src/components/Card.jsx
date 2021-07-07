import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, title, imageUrl }) => (
  <div className="card mt-5">
    <div className="card-body">
      {title && (<h3 className="card-title">{title}</h3>)}
      {imageUrl && (<img className="card-img-top" src={imageUrl} alt="title" />)}
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
