/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';

export default class Echart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options || {},
      id: this.props.id || '',
    };
  }

  componentDidMount() {
    //   初始化echart
    const { options ,id} = this.state;

    const myChart = echarts.init(document.getElementById(id));
    myChart.setOption(options)
  }

  render() {
    return <div id={this.props.id}></div>;
  }
}
