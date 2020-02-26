/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { Upload, Button, Card } from 'antd';
import defaultSettings from '../../../config/defaultSettings';

export default class Firmware extends Component {
  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      previewFile(file) {
        console.log('Your upload file:', file);
        // Your process logic. Here we just mock to the same file
        return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
          method: 'POST',
          body: file,
        })
          .then(res => res.json())
          .then(({ thumbnail }) => thumbnail);
      },
    };
    return (
      <div>
        <Card
          title="固件升级"
          bodyStyle={{ backgroundColor: defaultSettings.cardBodyStyleColor }}
          extra="当前版本信息：V1.2.6_20190211"
        >
          <div style={{ display: 'flex' ,justifyContent:"space-between"}}>
            <div  style={{ width: '70%' }}>
              <Upload {...props}  className="uploadaaa">
                <Button className="uploadbtn">
                  选择文件
                  {/* <Icon type="upload" >选择文件</Icon> */}
                </Button>
              </Upload>
            </div>
            <Button style={{ width: '20%' }}>上传</Button>
          </div>
        </Card>
        <Card>
            <Button type="danger" style={{width:"100%"}}>恢复原厂设置</Button>
        </Card>
      </div>
    );
  }
}
