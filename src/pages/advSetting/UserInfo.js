/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Card, Input, Row, Col, Button, Form } from 'antd';
import defaultSettings from '../../../config/defaultSettings';

class UserInfo extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div>
        <Card title="用户管理" bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}>
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Form.Item label="原用户名" >
              {getFieldDecorator('oldusername')(<Input placeholder="原用户名"/>)}
            </Form.Item>
            <Form.Item label="新用户名">
              {getFieldDecorator('newusername')(<Input placeholder="新用户名" />)}
            </Form.Item>
            <Form.Item label="原密码">
              {getFieldDecorator('oldpassword')(<Input placeholder="原密码" />)}
            </Form.Item>
            <Form.Item label="新密码">
              {getFieldDecorator('newpassword')(<Input placeholder="新密码" />)}
            </Form.Item>
            <Form.Item label="确认密码">
              {getFieldDecorator('confirmpassword')(<Input placeholder="确认密码" />)}
            </Form.Item>
            <Form.Item>
              <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(UserInfo);
