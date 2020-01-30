import React from 'react';
import { Row, Col } from 'antd';

import { BasicBlock } from '../../../Block';
import { CommonButton } from '../../../Button';
import pencilIcon from '../../../../assets/icons/pencil.png';
import controllerIcon from '../../../../assets/icons/controller.png';
import uploadIcon from '../../../../assets/icons/upload.png';
import sitemap from '../../../../routing/sitemap';
import './Features.scss';

const Features = () => (
  <div id="features">
    <div className="screen-title">Features</div>
    <div className="feature-blocks">
      <div className="container">
        <Row type="flex" justify="space-between">
          <Col lg={7} xs={24}>
            <BasicBlock iconUrl={pencilIcon} title="Various Aspects">
              If you’ve hung around kids at all in the last few years, you know they love YouTube, even though the video site is only supposed to be for people 13 and up. Now, Google is planning to roll out a YouTube app specifically aimed at kids.
            </BasicBlock>
          </Col>
          <Col lg={7} xs={24}>
            <BasicBlock iconUrl={controllerIcon} title="Making Project">
            The State Department announced new policies Tuesday stipulating that U.S. drones can only be exported through government programs and that the receiving country needs to agree to certain conditions about what the drone will be used for.
            </BasicBlock>
          </Col>
          <Col lg={7} xs={24}>
            <BasicBlock iconUrl={uploadIcon} title="Cloud Balloon">
            The U.S. has succeeded in embedding virtually untouchable implants that are capable of spying on and even damaging foreign computer networks, according to a new report from a Russian cybersecurity company.
            </BasicBlock>
          </Col>
        </Row>
      </div>
    </div>
    <CommonButton mode="primary" to={sitemap.home}>Learn More</CommonButton>
  </div>
);

export default Features;
