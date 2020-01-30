import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty, useFirebase } from 'react-redux-firebase';
import { Icon, Dropdown, Menu, message } from 'antd';

import { CommonButton } from '../../Button';
import sitemap from '../../../routing/sitemap';
import logoImage from '../../../assets/images/logo.png';
import './Header.scss';

const mapStateToProps = ({ global, firebase }) => ({ global, firebase });

const Header = ({ global, history, firebase }) => {
  const { auth } = useSelector(state => state.firebase);
  const fire = useFirebase();

  const menu = () => {
    return (
      <Menu style={{ width: 200 }}>
        <Menu.Item key="0">
          <Link to={sitemap.profile}>Profile</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key="1"
          onClick={() => {
            fire
              .auth()
              .signOut()
              .then(() => {
                history.push(sitemap.home);
              })
              .catch(() => {
                message.error('An unexpectede error has occurred. Please try again');
              })
          }}
        >
          <Link to={sitemap.home}>Logout</Link>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div id="header-wrapper">
      <div className={`site-loader ${global.appLoading ? 'active' : ''}`}>
        <Icon type="loading" style={{ color: '#8f75be', fontSize: 24 }}/>
      </div>
      <div className="container --full">
        <div className="inner">
          <div className="logo">
            <Link to={sitemap.home}>
              <img src={logoImage} alt=""/>
            </Link>
          </div>
          {
            isLoaded(auth)
              ? (
                <>
                  {
                    isEmpty(auth)
                      ? (
                        <CommonButton mode="transparent" to={sitemap.profile}>
                          Sign In
                        </CommonButton>
                      )
                      : (
                        <Dropdown overlay={menu} trigger={['click']}>
                          <div className="user-icon">
                            {
                              firebase && firebase.profile && firebase.profile.photo
                                ? (
                                  <img src={firebase.profile.photo} alt=""/>
                                )
                                : (
                                  <Icon type="user" style={{ color: '#FFF' }}/>
                                )
                            }
                          </div>
                        </Dropdown>
                      )
                  }
                </>
              )
              : (
                <Icon type="loading" />
              )
          }
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(Header));
