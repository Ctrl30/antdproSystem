/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Card, Tag,Divider } from 'antd';
import styles from './BaseParams.less';
import defaultSettings from "../../../config/defaultSettings";

export default class BaseParams extends Component {
  render() {
    return (
      <div>
        <Card
          title="基本参数"
          extra={
            <span className={styles.basestate}>
              <Tag color="#87ff68" className={styles.tagstate} />
              音频通道运行状态：正常
            </span>
          }
          bodyStyle={{backgroundColor:defaultSettings.cardBodyStyleColor}}
        >
          <div className={styles.contentbox}>
              <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                  <p>192.168.0.101</p>
                  <p>设备地址</p>
              </div>
              </div>
              <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                  <p>192.168.0.101</p>
                  <p>设备地址</p>
              </div>
              </div>
              <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                  <p>192.168.0.101</p>
                  <p>设备地址</p>
              </div>
              </div>
              <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                  <p>192.168.0.101</p>
                  <p>设备地址</p>
              </div>
              </div>
              <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                  <p>192.168.0.101</p>
                  <p>设备地址</p>
              </div>
              </div>
              <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                  <p>192.168.0.101</p>
                  <p>设备地址</p>
              </div>
              </div>
             
          </div>
        </Card>
        <Card title="设备运行时间" style={{ marginTop: '20px' }}  bodyStyle={{backgroundColor:defaultSettings.cardBodyStyleColor}}>
          <p>2分27秒</p>
        </Card>
      </div>
    );
  }
}
