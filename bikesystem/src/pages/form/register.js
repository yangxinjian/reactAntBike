import React from 'react'
import { Card, Form, Input, Icon, Radio,Button, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Checkbox} from 'antd';
import moment from 'moment';
const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea
class Registers extends React.Component{
    state = {}
    handleClick = () => {
        // 获取当前的值
        let userInfo = this.props.form.getFieldsValue()
        console.log(JSON.stringify(userInfo))
    }
    handleClickReset = () => { // 重置
        let userInfo = this.props.form.resetFields()
    }
    handleChange = (info) => { // 上传图像
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            // 正常是调用服务器的上传地址
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,// 这里要和你定义的变量一样
                loading: false,
            }));
        }
    }
    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = { // 栅格样式 复用
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 8
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return(
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('pwd', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input type="password" prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择性别'
                                        }
                                    ]
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入年龄'
                                        }
                                    ]
                                })(
                                    <InputNumber></InputNumber>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2',
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(
                                    <Select>
                                        <Option value="1">美少女战士</Option>
                                        <Option value="2">巴啦啦小魔仙</Option>
                                        <Option value="3">前端小仙女</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['6','7'], // 初始值
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">麻辣烫</Option>
                                        <Option value="2">冒菜</Option>
                                        <Option value="3">炸鸡</Option>
                                        <Option value="4">烧烤</Option>
                                        <Option value="5">火锅</Option>
                                        <Option value="6">睡觉</Option>
                                        <Option value="7">躺着</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birth', {
                                    initialValue: moment('2018-08-08') ,
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(
                                    <TextArea autosize={{minRows:5}}></TextArea>
                                )
                            }
                        </FormItem>
                        <FormItem label="早期时间" {...formItemLayout}>
                            {
                                getFieldDecorator('wakeUpTime', {
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(
                                    <Upload
                                        listType="picture-card"
                                        howUploadList={false}
                                        // axtion是服务器的地址
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg?<img src={this.state.userImg} />:<Icon type="plus"></Icon>}
                                       
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem label="" {...offsetLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                })(
                                    <Checkbox>我已阅读遵从劳务协议</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem label="" {...offsetLayout}>
                            <Button type="primary" onClick={this.handleClick}>注册</Button>
                            <Button type="primary" onClick={this.handleClickReset}>重置</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Registers)