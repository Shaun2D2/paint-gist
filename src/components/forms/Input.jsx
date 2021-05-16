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

{/* <div clas="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div> */}

Input.propTypes = {
  label: PropTypes.string,
  appendLabel: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  appendLabel: null,
};

export default Input;
