import React from 'react'
import {Card, Button, Radio} from 'antd'
export default class Buttons extends React.Component{
    state = {
        loading: true,
        size: 'small'
    }
    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }
    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render () {
        return (
            <div>
                <Card title="基础摁钮">
                    <Button type="primary">炸鸡</Button>
                    <Button>烧烤</Button>
                    <Button type="dashed">烤鱼</Button>
                    <Button type="danger">烤肉</Button>
                    <Button disabled>冒菜</Button>
                </Card>
                <br />
                <Card title="图形摁钮">
                    <Button icon="plus">添加麻辣烫</Button>
                    <Button icon="edit">编辑麻辣拌</Button>
                    <Button icon="delete">删除火锅</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button icon="search" type="primary">大盘鸡</Button>
                    <Button icon="download">龙虾</Button>
                </Card>
                <br />
                <Card title="Loading摁钮">
                    <Button type="primary" loading={this.state.loading}>确定肯德基</Button>
                    <Button shape="circle" loading={this.state.loading} type="primary"></Button>
                    <Button loading={this.state.loading}>点击加载麦当劳</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭卷饼</Button>
                </Card>
                <br />
                <Card title="摁钮组">
                    <Button.Group>
                        <Button icon="left" type="primary" style={{marginRight: '0px'}}>返回</Button>
                        <Button icon="right" type="primary">前进</Button>
                    </Button.Group>
                </Card>
                <br />
                <Card title="摁钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>炸鸡</Button>
                    <Button size={this.state.size}>烧烤</Button>
                    <Button type="dashed" size={this.state.size}>烤鱼</Button>
                    <Button type="danger" size={this.state.size}>烤肉</Button>
                    <Button disabled size={this.state.size}>冒菜</Button>
                </Card>
            </div>
        )
    }
}