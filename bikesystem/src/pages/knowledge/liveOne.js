import React from 'react'
import Child from './child.js'
import './index.less'
import {Button} from 'antd'
export default class life extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleAdd () {// 第一种点击方式，需bind
        this.setState({
            count: this.state.count + 1
        })
    }
    handleClick = () => { // 第二种点击方式，无需bind
        this.setState({
            count: this.state.count - 2
        })
    }
    render() {
        // react的核心
        return (
            <div className="content">
                <p>react生命周期介绍</p>
                <Button onClick={this.handleAdd.bind(this)}>antD dianji</Button>
                <button onClick={this.handleAdd.bind(this)}>点击一下</button>
                <button onClick={this.handleClick}>点击一下</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
}