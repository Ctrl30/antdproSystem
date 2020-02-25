/* eslint-disable react/prefer-stateless-function */
import { Button, Card, Icon } from 'antd';
import React, { Component } from 'react';
import defaultSettings from '../../../../config/defaultSettings';

export default class Video extends Component {
  render() {
    return (
      <div style={{display:'flex',justifyContent:"space-between"}}> 
      <div style={{width:'40%'}}>
      <Card
          title="搜索设备"
          bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
          extra={
            <Button type="primary">刷新</Button>
          }
        >
            
          <div />
        </Card>
        <Card
          title="已添加设备"
          style={{marginTop:20}}
        //   bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
         
        >
            <div>
               192.168.0.6
            </div>
            <div>
               192.168.0.6
            </div>
            <div>
               192.168.0.6
            </div>
            <div>
               192.168.0.6
            </div>
        </Card>
      </div>
      
        <Card
          title={<span><Icon type="close-circle" style={{color:"red"}} /> 相机无法连接</span>}
          style={{width:'55%'}}
          bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor ,height:'100%'}}
          extra={
            <span style={{color:'green'}}>IP：192.168.0.6</span>
          }
        >
            
          <div />
        </Card>
      </div>
    );
  }
}
