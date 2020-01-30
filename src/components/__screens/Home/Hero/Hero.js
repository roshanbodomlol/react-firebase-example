import React from 'react';
import { message } from 'antd';

import { CommonButton } from '../../../Button';

import './Hero.scss';

const Hero = () => (
  <div id="hero">
    <div className="hero-content">
      <span className="--small">FOR LANDING PAGES</span>
      <span className="--big">
        Favorable Circumstances of Portable Bluetooth
      </span>
      <CommonButton mode="primary" onClick={() => message.info('Download started')}>DOWNLOAD</CommonButton>
    </div>
  </div>
);

export default Hero;
