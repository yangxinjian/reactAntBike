import React from 'react'
import {Card, Button,Message} from 'antd'
import './index.less'
export default class Messages extends React.Component{
    showMessage = (type) => {
        Message[type]('恭喜你，终于吃饱了')
    }
    render () {
        return (
            <div>
                <Card title="全局Message">
                    <Button type="primary" onClick={() => this.showMessage('success')}>success</Button>
                    <Button type="primary" onClick={() => this.showMessage('info')}>info</Button>
                    <Button type="primary" onClick={() => this.showMessage('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.showMessage('error')}>error</Button>
                    <Button type="primary" onClick={() => this.showMessage('loading')}>loading</Button>
                </Card>
                <br />
            </div>
        )
    }
}