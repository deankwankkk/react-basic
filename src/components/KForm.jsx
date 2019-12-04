import React, { Component } from 'react';
import { Button, Input } from 'antd';

// 2. 创建增强函数，接收一个组件，返回值为增强后的组件
// 扩展表单的高阶组件，提供输入控件包装、事件处理、表单校验等
function kKForm(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            // 接收校验规则等选项
            this.options = {};
            // 存储表单输入的值
            this.state = {};
        }

        handleChange = e => {
            let { name, value } = e.target;
            // 在更新最新值之后进行校验字段操作，如果校验字段函数单独写，setState是异步操作，可能还没有进行最新值的保存
            this.setState({
                [name]: value // 保存最新值
            }, () => {
                // 校验：注意回调中调用
                this.validateField(name);
            })
        }

        // 返回包装输入控件的高阶组件，代理其事件处理、赋值等操作
        // field字段名，options选项，InputComp输入控件
        getFieldDec = (field, option) => {
            this.options[field] = option;
            return InputComp => (
                <div>
                    {/* 由React.createElement生成的元素不能修改，需要克隆一份再扩展 */}
                    {React.cloneElement(InputComp, {
                        name: field, // 控件名
                        value: this.state[field] || "", // 控件值
                        onChange: this.handleChange // 控件change事件处理
                    })}
                    {this.state[field+"Message"] && (<p style={{color: "red"}}>
                        {this.state[field+"Message"]}
                    </p>)}
                </div>
            )
        }

        // 校验单个字段
        validateField = field => {
            // 获取校验规则
            const rules = this.options[field].rules;

            // 遍历校验规则,如果有一项不符合，则返回
            const ret = !rules.some(rule => {
                // 只校验必填项
                if (rule.required) {
                    if (!this.state[field]) {
                        // 如果对应字段值不存在，设置错误信息
                        this.setState({
                            [field + 'Message']: rule.message
                        });
                        return true; // 若有校验失败，返回true
                    }
                }
            });
            // 若校验成功，清楚错误提示
            if (ret) {
                this.setState({
                    [field + 'Message']: ''
                })
            };
            return ret;
        }

        render() {
            return <Comp {...this.props} validateField={this.validateField} getFieldDec={this.getFieldDec}></Comp>
        }
    }
}

// 1. 创建普通的组件
@kKForm
class KForm extends Component {
    render() {
        const { getFieldDec } = this.props;
        return (
            <div>
                {
                    getFieldDec('uname', {
                        rules: [{ required: true, message: "请输入用户名" }]
                    })(<Input></Input>)
                }
                <Button type="primary">登录</Button>
            </div>
        )
    }
}

export default KForm;