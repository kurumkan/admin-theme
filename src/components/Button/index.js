import React from 'react';
import { func, bool } from 'prop-types';
import classNames from 'classnames';
import validatePropTypes from 'utils/validatePropTypes';
import './style.scss';

const Button = ({ onClick, type, shape, size, active, children }) => {
  const classes = classNames('button', type, size, shape);
  if (active) {
    classes.push('active');
  }
  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: func.isRequired,
  type: validatePropTypes('type'),
  shape: validatePropTypes('shape'),
  size: validatePropTypes('size'),
  active: bool
};

export default Button;
