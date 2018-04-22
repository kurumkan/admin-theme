import React from 'react';
import { arrayOf, shape, string, bool, func } from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './style.scss';

const ActionGroup = ({ items }) => (
  <div className="action-group">
    {items.map(({ icon, label, disabled, onClick }) => (
      <button onClick={onClick} disabled={disabled}>
        <FontAwesome
          name={icon}
          className="action-group__item-icon"
        />
        { label && <span className="action-group__item-label">label</span> }
      </button>
    ))}
  </div>
);

ActionGroup.propTypes = {
  items: arrayOf(shape({
    icon: string.isRequired,
    label: string,
    disabled: bool,
    onClick: func.isRequired
  }))
};

export default ActionGroup;
