/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Card, Input, Row, Col, Button, Form, Switch, Divider } from 'antd';
import defaultSettings from '../../../../config/defaultSettings';
import styles from './network.less';

class NetWork extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <Card
        title="网络参数"
        style={{ marginTop: '20px' }}
        bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
      >
        <div>
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label="设备地址">
                  {getFieldDecorator('id1')(<Input placeholder="设备地址" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="子网掩码">
                  {getFieldDecorator('id2')(<Input placeholder="子网掩码" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="默认网关">
                  {getFieldDecorator('id3')(<Input placeholder="默认网关" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="首选DNS">
                  {getFieldDecorator('id4')(<Input placeholder="首选DNS" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="备选DNS">
                  {getFieldDecorator('id5')(<Input placeholder="备选DNS" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item>
                  <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                    保存
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <h3>设备名称与位置</h3>
          <Divider />
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="设备地址">
                  {getFieldDecorator('id1')(<Input placeholder="产业园5期" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="设备名称">
                  {getFieldDecorator('id2')(<Input placeholder="网络拾音器A" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item>
                  <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                    保存
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <h3>NTP</h3>
          <Divider />
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Row gutter={24}>
              <Col span={12}>
                <p>数字消噪</p>
                <Switch />
              </Col>
              <Col span={12}>
                <p>NTP同步状态</p>
                <span className={styles.dot} />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label="校时时间间隔（分钟）">
                  {getFieldDecorator('id1')(<Input placeholder="1" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="NTP服务器地址">
                  {getFieldDecorator('id1')(<Input placeholder="192.168.0.150" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="NTP服务器端口">
                  {getFieldDecorator('id2')(<Input placeholder="123" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item>
                  <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                    保存
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>

        <div>
          <h3>平台服务器</h3>
          <Divider />
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Row gutter={24}>
              <Col span={24}>
                <p>指定平台服务器</p>
                <Switch />
              </Col>
             
            </Row>
            <Row gutter={24}>
              <Col span={12}>
              <Form.Item label="平台服务器IP">
                  {getFieldDecorator('id2')(<Input placeholder="192.168.0.4" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="平台服务器端口">
                  {getFieldDecorator('id2')(<Input placeholder="9996" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item>
                  <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                    保存
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Card>
    );
  }
}
export default Form.create()(NetWork);
