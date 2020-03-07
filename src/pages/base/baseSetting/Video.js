/* eslint-disable react/prefer-stateless-function */
import { Button, Card, Icon } from 'antd';
import React, { Component } from 'react';
import defaultSettings from '../../../../config/defaultSettings';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import 'video.js/dist/video-js.min.css';
import styles from './video.less'

export default class Video extends Component {

  render() {
    const videoJsOptions = {
      autoplay: true, // 自动播放
      language: 'zh-CN',
      controls: true, // 控制条
      preload: 'auto', // 自动加载
      errorDisplay: true, // 错误展示
      width: 500, // 宽
      height: 300, // 高
    //   fluid: true, // 跟随外层容器变化大小，跟随的是外层宽度
      // controlBar: false,  // 设为false不渲染控制条DOM元素，只设置controls为false虽然不展示，但还是存在
      // textTrackDisplay: false,  // 不渲染字幕相关DOM
      userActions: {
        hotkeys: true, // 是否支持热键
      },
      sources: [
        {
          //  src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks1',
          src: 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8',
          //    src: 'rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov',
          //  src: 'rtmp://58.200.131.2:1935/livetv/hunantv',
          //   src: 'rtmp://202.69.69.180:443/webcast/bshdlive-pc',
          //  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
          //  type: "rtsp/flv",  // 类型可加可不加，目前未看到影响
          // rtsp
          // type: 'video/mp4',
        },
      ],
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '40%' }}>
          <Card
            title="搜索设备"
            bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
            extra={<Button type="primary">刷新</Button>}
          >
            <div>
              <ul className={styles.liflex}>
                <li><span>ip:192.168.0.1</span> <Icon style={{ fontSize: '18px'}} type="folder-add" /></li>
                <li><span>ip:192.168.0.1</span> <Icon style={{ fontSize: '18px'}} type="folder-add" /></li>
                <li><span>ip:192.168.0.1</span> <Icon style={{ fontSize: '18px'}} type="folder-add" /></li>
                <li><span>ip:192.168.0.1</span> <Icon style={{ fontSize: '18px'}} type="folder-add" /></li>
                <li><span>ip:192.168.0.1</span> <Icon style={{ fontSize: '18px'}} type="folder-add" /></li>
                <li><span>ip:192.168.0.1</span> <Icon style={{ fontSize: '18px'}} type="folder-add" /></li>
              </ul>
            </div>
          </Card>
          <Card
            title="已添加设备"
            style={{ marginTop: 20 }}
            //   bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
          >
            <div>192.168.0.6</div>
            <div>192.168.0.6</div>
            <div>192.168.0.6</div>
            <div>192.168.0.6</div>
          </Card>
        </div>

        <Card
          title={
            <span>
              <Icon type="close-circle" style={{ color: 'red' }} /> 相机无法连接
            </span>
          }
          style={{ width: '55%' }}
          bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor, height: '100%' }}
          extra={<span style={{ color: 'green' }}>IP：192.168.0.6</span>}
        >
          <VideoPlayer {...videoJsOptions}   />
          <video id="test_video" controls autoPlay src="http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8" />
        </Card>
      </div>
    );
  }
}
