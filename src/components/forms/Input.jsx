import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({ label, appendLabel, ...restOfProps }) => {
  const { name } = restOfProps;

  return (
    <div className={classNames('mb-3', { 'input-group': appendLabel })}>
      {label && <label htmlFor={name} className="form-label">{label}</label>}
      <input className="form-control" {...restOfProps} />
      {appendLabel && (<span className="input-group-text">{appendLabel}</span>)}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  appendLabel: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  appendLabel: null,
};

export default Input;
