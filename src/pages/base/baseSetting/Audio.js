/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Tabs, Card, Form, Input, Switch, Slider } from 'antd';
import defaultSettings from '../../../../config/defaultSettings';

const { TabPane } = Tabs;
export default class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelMarks: {
        0: {
          style: {
            color: 'rgb(45,172,121)',
          },
          label: <strong>0</strong>,
        },
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
      },
      levelDisable: true,
    };
  }

  // tab页切换的回调
  callback = key => {
    console.log(key);
  };

  // switch按钮的回调
  handleDisabledChange = disabled => {
    // console.log(disabled);
    this.setState({
      levelDisable: !disabled,
    });
  };

  // 基本设置
  renderBase = () => (
    <div>
      <Form layout="vertical">
        <Form.Item label="场景模式">
          <Input value="嘈杂模式" disabled />
        </Form.Item>
        <Form.Item label="声波模式">
          <Input value="启用" disabled />
        </Form.Item>
        <Form.Item label="兼容模式">
          <Input value="平台兼容模式" disabled />
        </Form.Item>
      </Form>
    </div>
  );

  //  消噪等级
  renderLevel = () => {
    const { levelMarks, levelDisable } = this.state;
    return (
      <div>
        <div>
          <p>数字消噪</p>
          <Switch onChange={this.handleDisabledChange} />
          <p>消噪等级</p>
          <Slider
            max={15}
            marks={levelMarks}
            disabled={levelDisable}
            included={false}
            defaultValue={4}
          />
        </div>
      </div>
    );
  };

  // 滤波器

  // AGC

  // DAC音量

  render() {
    return (
      <Card title="参数配置" bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}>
        <Tabs onChange={this.callback} type="card" tabBarGutter={12}>
          <TabPane tab="基本设置" key="1">
            {this.renderBase()}
          </TabPane>
          <TabPane tab="消噪等级" key="2">
            {this.renderLevel()}
          </TabPane>
          <TabPane tab="滤波器" key="3">
            滤波器3
          </TabPane>
          <TabPane tab="AGC" key="4">
            AGC
          </TabPane>
          <TabPane tab="DAC音量" key="5">
            DAC音量
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}
