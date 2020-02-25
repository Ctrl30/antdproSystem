/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Card, Input, Row, Col, Button,Form } from 'antd';
import defaultSettings from '../../../../config/defaultSettings';

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
    console.log(this.props)
    const { getFieldDecorator } = this.props.form;
    return (
      <Card
        title="网络参数"
        style={{ marginTop: '20px' }}
        bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
      >
        <div>
          <Form layout="vertical" onSubmit={this.handleSubmit} >
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
                  <Button style={{width:"100%"}} type="primary" htmlType="submit" >
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
export default Form.create()(NetWork)
