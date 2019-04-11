import React from 'react'
import {Card, Button, Spin , Icon, Alert} from 'antd'
export default class Loading extends React.Component{
    render () {
        const icon = <Icon type='loading' style={{fontSize: '24px'}} />
        return (
            <div>
                <Card title="Spin用法">
                    <Spin size="small" />
                    <Spin style={{margin: '0 30px'}}/>
                    <Spin size="large" style={{margin: '0 30px 0 0'}}/>
                    <Spin indicator={icon} />
                </Card>
                <br />
                <Card title="内容遮罩">
                    <Alert
                        message="react"
                        description="这是关于react的插件ant下的alert"
                        type="info"
                    ></Alert>
                    <Spin>
                        <Alert
                            message="react"
                            description="这是关于react的插件ant下的alert"
                            type="warning"
                        ></Alert>
                    </Spin>
                    <Spin tip="加载中..." indicator={icon}>
                        <Alert
                            message="react"
                            description="这是关于react的插件ant下的alert"
                            type="warning"
                        ></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}