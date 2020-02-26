/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Card,  Divider } from 'antd';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts';
import defaultSettings from '../../../config/defaultSettings';
import styles from './System.less';

export default class System extends Component {
  componentDidMount() {
    const option1 = {
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      legend: {
        data: ['line1', 'line2'],
      },
      series: [
        {
          name: 'line1',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
        {
          name: 'line2',
          type: 'line',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
        },
      ],
    };

    const option2 = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: '输入宽带Mbps',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: 50, name: '输入宽带Mbps' }],
        },
      ],
    };
    const option3 = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: '输出宽带Mbps',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: 50, name: '输出宽带Mbps' }],
        },
      ],
    };

    //   初始化echart

    const myChart1 = echarts.init(document.getElementById('opt1'));
    const myChart2 = echarts.init(document.getElementById('opt2'));
    const myChart3 = echarts.init(document.getElementById('opt3'));
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
  }

  render() {
    return (
      <div>
        <Card title="系统信息" bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}>
          <div className={styles.contentbox}>
            <div className={styles.flexbox1}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                <h2>V1.2.6_20190211</h2>
                <p>系统版本</p>
              </div>
            </div>
            <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                <h2>431</h2>
                <p>内部版本号</p>
              </div>
            </div>
            <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                <h2>1.0BETA</h2>
                <p>WEB版本</p>
              </div>
            </div>
            <div className={styles.flexbox}>
              <Divider type="vertical" orientation="left" className={styles.dividerline} />
              <div>
                <h2>10020304841988</h2>
                <p>序列号</p>
              </div>
            </div>
          </div>
        </Card>
        <div className={styles.contentbox}>
          <Card
            bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
            className={styles.echart}
          >
            <div id="opt1" style={{ height: 650 }} />
          </Card>
          <Card
            bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
            className={styles.echart}
          >
            <p style={{ fontSize: 20, textAlign: 'center', color: 'rgb(51,126,170)' }}>
              实时网络速率
            </p>

            <div style={{ display: 'flex', height: 600 }}>
              <div id="opt2" style={{ height: 'auto', width: '50%' }} />
              <div id="opt3" style={{ height: 'auto', width: '50%' }} />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
