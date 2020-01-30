import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

import sitemap from '../../../routing/sitemap';

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you requested does not exist."
    extra={<Link to={sitemap.home}>Back Home</Link>}
  />
);

export default NotFound;
