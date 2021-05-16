import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ label, ...restOfProps }) => {
  const { name } = restOfProps;

  return (
    <div className="input-group mb-3">
      {label && <label htmlFor={name} className="form-label">{label}</label>}
      <textarea className="form-control" {...restOfProps} />
    </div>

  );
};

Text.propTypes = {
  label: PropTypes.string,
};

Text.defaultProps = {
  label: null,
};

export default Text;
