import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import validatePropTypes from 'utils/validatePropTypes';
import './style.scss';

const Button = ({ onClick, type, size, active, children }) => {
  const classes = classNames('button', type, size);
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
  onClick: PropTypes.func.isRequired,
  size: validatePropTypes('size'),
  type: validatePropTypes('type'),
  active: PropTypes.bool
};

export default Button;
