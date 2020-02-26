/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Card } from 'antd';
import defaultSettings from '../../../config/defaultSettings';

export default class Record extends Component {
  render() {
    return <div>
         <Card title="录音文件" bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}>
             <div style={{display:'flex'}}>
                <div style={{width:"38%"}}>目录别表</div>
                <div style={{width:"58%"}}>文件列表</div>
             </div>
         </Card>
    </div>;
  }
}
