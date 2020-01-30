import React from 'react';
import { Row, Col } from 'antd';

import { CommonButton } from '../../../Button';
import { BasicBlock } from '../../../Block';
import sitemap from '../../../../routing/sitemap';
import './Options.scss';

const Options = () => (
  <div id="options">
    <div className="screen-title --medium">Choose Your Option</div>
    <span>But I must explain to you how all this mistaken idea of denouncing</span>

    <div className="container">
      <Row type="flex" justify="center">
        <Col span={18}>
        <div className="cards">
          <Row type="flex">
            <Col md={12} xs={24}>
              <BasicBlock
                iconTitle="Freelancer"
                title="Initially designed to"
              >
                <span>But I must explain to you how all this mistaken idea of denouncing</span>
                <CommonButton mode="primary" to={sitemap.signIn}>Start Here</CommonButton>
              </BasicBlock>
            </Col>
            <Col md={12} xs={24}>
              <BasicBlock
                iconTitle="Studio"
                title="Initially designed to"
                className="--purple"
              >
                <span>But I must explain to you how all this mistaken idea of denouncing</span>
                <CommonButton mode="transparent" to={sitemap.signIn}>Start Here</CommonButton>
              </BasicBlock>
            </Col>
          </Row>
        </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Options;
