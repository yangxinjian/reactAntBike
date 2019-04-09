import React from 'react'
export default class Info extends React.Component {
    render () {
        return (
                <div>
                   这是设置动态路由,这是接受路由传递值：
                   {this.props.match.params.mainId}
                </div>
        )
    }
}