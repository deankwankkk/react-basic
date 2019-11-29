import React, { Component } from 'react';
import {Button} from 'antd';

export class Demo extends Component {
    constructor(props) {
        super(props);
        console.log("1.组件构造函数执行了");
    }

    componentWillMount() {
        // 此时可以访问状态和属性  进行api调用
        console.log("2.组件将要挂载");
    }

    componentDidMount() {
        // 组件已挂载  可进行状态更新操作
        console.log("3.组件挂载完毕");
    }

    componentWillReceiveProps(props) {
        console.log(props);
        // 父组件传递的属性有变化，做相应响应
        console.log("4.接收属性传递");
    }

    shouldComponentUpdate() {
        // 组件是否要进行更新，返回值boolean，优化点
        console.log("5.组件是否要更新");
        return true;
    }

    componentWillUpdate() {
        // 组件将要更新，可做更新统计
        console.log("6.组件要进行更新");
    }

    componentDidUpdate() {
        console.log("7.组件已更新")
    }

    componentWillUnmount() {
        // 组件将要卸载，可做清理工作
        console.log("8.组件将卸载")
    }

    
    render() {
        return (
            <div>
                生命周期探究
                <Button>增加{this.props.prop}</Button>
            </div>
        );
    }
}

export default Demo;
