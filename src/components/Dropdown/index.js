import React from 'react';
import { func, bool } from 'prop-types';
import classNames from 'classnames';
import validatePropTypes from 'utils/validatePropTypes';
import './style.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    };
  }

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { state: { isOpen } } = this;
    const classes = ['dropdown'];
    if (isOpen) {
      classes.push('open');
    }
    return (
      <div className={classNames(classes)}>
        <button
          className="dropdown__btn"
          onClick={this.toggleDropdown}
          onBlur={this.toggleDropdown}
        >
          Dropdown
        </button>
        <ul className="dropdown__list">
          <li className="dropdown__list-item">Link 1</li>
          <li className="dropdown__list-item">Link 2</li>
          <li className="dropdown__list-item">Link 3</li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
