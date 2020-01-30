import React from 'react';
import { string, node } from 'prop-types';

import './Block.scss';

const BasicBlock = ({ iconUrl, title, children, iconTitle, className }) => (
  <div className={`block --basic ${className}`}>
    {
      iconUrl && (
        <div className="block-icon">
          <img src={iconUrl} alt=""/>
        </div>
      )
    }
    {
      iconTitle && (
        <div className="block-icon-title">
          {iconTitle}
        </div>
      )
    }
    {
      title && (
        <div className="block-title">{title}</div>
      )
    }
    <div className="block-content">
      {children}
    </div>
  </div>
);

BasicBlock.propTypes = {
  children: node.isRequired,
  title: string,
  iconUrl: string,
  iconTitle: string,
  className: string
};

BasicBlock.defaultProps = {
  iconUrl: null,
  iconTitle: null,
  className: '',
  title: null
};

export default BasicBlock;
