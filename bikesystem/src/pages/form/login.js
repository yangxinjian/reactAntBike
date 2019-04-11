import React from 'react'
import { Card, Form , Input, Button, message, Icon, Checkbox} from 'antd';
const FormItem = Form.Item
class FormLogin extends React.Component{
    // button点击验证
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName}您的密码是${userInfo.userPwd}`)
            }
        })
    }
    render (){
        const {getFieldDecorator} = this.props.form // 输入验证
        return (
            <div>
                <Card title="表单登录行内">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <br />
                <Card title="常用表单登录水平">
                    <Form layout="horizontal" style={{width: 300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 5,
                                            max: 10,
                                            message: '长度不在范围内'
                                        },
                                        {
                                            pattern: /^\w+$/g,
                                            message: '用户名必须为英文字母或者数字'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" prefix={<Icon type="user"></Icon>}></Input>
                                )
                            }     
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入密码" prefix={<Icon type="lock"></Icon>}></Input>
                                )
                            } 
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remenber', {
                                    valuePropName: 'checked', // checkbox专属初始值
                                    initialValue: true,
                                    rules: [
                                    ]
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            } 
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin)