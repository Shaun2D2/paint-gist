import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useController } from 'react-hook-form';

import './Input.scss';

const Input = ({
  name, label, appendLabel, type, defaultValue
}) => {
  const {
    field,
    fieldState: { invalid },
  } = useController({ name, defaultValue: defaultValue || '' });

  return (
    <div className={classNames('mb-3', 'has-validation', { 'input-group': appendLabel, 'is-invalid': invalid })}>
      {label && <label htmlFor={name} className="form-label">{label}</label>}
      <input type={type} className="form-control" {...field} />
      {appendLabel && (<span className="input-group-text">{appendLabel}</span>)}
      {invalid && <div className="field-error">{ invalid } </div>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  appendLabel: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: null,
  appendLabel: null,
  type: 'text',
};

export default Input;
