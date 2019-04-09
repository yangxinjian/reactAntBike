import React from 'react'
import Main from './main'
import Topics from '../router1/topics'
import About from '../router1/about'
import Home from './home'
// as 是起一个其他的名字
import {HashRouter as Router, Route, Link} from 'react-router-dom'
export default class YRoute extends React.Component{
    render () {
        return (
            <Router>
                <Home>
                    <Route path="/main" render={() => 
                        <Main>
                            <div>
                            <Route path="/main/a" component={About}></Route>
                            </div>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                </Home>
            </Router>
        )
    }
}