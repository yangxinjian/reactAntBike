import React from 'react'
import {Link} from 'react-router-dom'
export default class Home extends React.Component {
    render () {
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/main">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                        {/* 检索不到路由的配置 */}
                        <li>
                            <Link to="/yxj">yxj</Link>
                        </li>
                    </ul>
                    <hr />
                    {this.props.children}
                </div>
        )
    }
}