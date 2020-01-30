import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import sitemap from '../../../routing/sitemap';
import logoImage from '../../../assets/images/logo.png';
import './Footer.scss';

const Footer = () => (
  <div id="footer-wrapper">
    <div className="container">
      <Row type="flex">
        <Col lg={8} xs={24}>
          <div className="footer-text">
            <span>SUBSCRIBE AND GET THE LATEST NEWS</span>
          </div>
        </Col>
        <Col lg={8} xs={24}>
          <div className="footer-logo">
            <Link to={sitemap.home}><img src={logoImage} alt=""/></Link>
          </div>
        </Col>
        <Col lg={8} xs={24}>
          <div className="email-input">
            <input type="email" placeholder="Your Email Address"/>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Footer;
