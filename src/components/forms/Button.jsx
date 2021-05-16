import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const classMap = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  danger: 'btn-danger',
  warning: 'btn-warning',
  info: 'btn-info',
  light: 'btn-light',
  dark: 'btn-dark',
  link: 'btn-link',
};

const Button = ({
  type, text, design, ...restOfProps
}) => {
  const btnClass = classMap[design] || 'btn-primary';
  return <button type={type} className={`btn ${btnClass}`} {...restOfProps}>{text}</button>;
};

Button.propTypes = {
  type: propTypes.string,
  design: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
  design: 'primary',
};

export default Button;
