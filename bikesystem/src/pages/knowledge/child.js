import React from 'react'
export default class Child extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentWillMount () {
        console.log('will mount')
    }
    componentDidMount () {
        console.log('did mount')
    }
    componentWillReceiveProps (newProps) { // 来自父级的属性
        console.log('receive prop' + newProps.name)
    }
    shouldComponentUpdate () {// 调用setstate出发
        console.log('should update')
        return true
    }
    componentWillUpdate () {
        console.log('will update')
    }
    componentDidUpdate () {
        console.log('did update')
    }
    render() {
        return (
            <div>    
                <p>here is children component</p>           
                <p>{this.props.name}</p>
            </div>
        )
    }
}