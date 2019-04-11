import React from 'react'
import {Card , Button, Notification} from 'antd'
import './index.less'
export default class Notifications extends React.Component{
    openNotification = (type,direction) => {
        if (direction) {
            Notification.config({
                placement: direction
            })
        }
        Notification[type]({
            message: '吃饭啦',
            description: '在经过很多个小时之后马上就可以吃完饭啦'
        })
    }
    render () {
        return (
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={() => this.openNotification('success')}>success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error')}>erroe</Button>
                </Card>
                <br />
                <Card title="通知提醒框">
                    <Button type="primary" onClick={() => this.openNotification('success','topLeft')}>success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>erroe</Button>
                </Card>
            </div>
        )
    }
}