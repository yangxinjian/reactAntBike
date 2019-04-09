import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'
import Main from './main'
import Topics from './topics'
import About from './about'
export default class Home extends React.Component {
    render () {
        return (
            <HashRouter>
                {/* 需要根节点 */}
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    {/* /about会检索到/和/about，所以防止加载两次，加上exact精确匹配 */}
                    <Route path="/" component={Main} exact></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                </div>
            </HashRouter>
        )
    }
}