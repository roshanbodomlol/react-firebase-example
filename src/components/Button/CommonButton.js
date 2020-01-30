import React from 'react';
import classnames from 'classnames';
import { oneOf, string, func, node } from 'prop-types';
import { Link } from 'react-router-dom';

import './Button.scss';

const CommonButton = ({ mode, className, onClick , children, to, size}) => {
  const buttonClasses = classnames(className, 'button', {
    primary: mode === 'primary',
    transparent: mode === 'transparent',
    link: to,
    '--medium': size === 'medium'
  });

  if (to) {
    return (
      <Link className={buttonClasses} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

CommonButton.propTypes = {
  mode: oneOf(['primary', 'transparent']).isRequired,
  children: node.isRequired,
  className: string,
  onClick: func,
  to: string,
  size: oneOf(['large', 'medium'])
};

CommonButton.defaultProps = {
  className: '',
  onClick: () => {},
  to: null,
  size: null
};

export default CommonButton;
