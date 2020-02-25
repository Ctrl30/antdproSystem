import { getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { connect } from 'dva';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'umi';
// import logo from '../assets/logo.svg';
import logo from '../assets/logo.png';
import styles from './UserLayout.less';

const UserLayout = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    breadcrumb,
    ...props,
  });
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
       
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>IP拾音器</span>
              </Link>
            </div>
            <div className={styles.desc} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
