import React from 'react'
import Main from './main'
import Topics from '../router1/topics'
import About from '../router1/about'
import Info from './info'
import Home from './home'
import NoMatch from './NoMatch'
// as 是起一个其他的名字
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
export default class YRoute extends React.Component{
    render () {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() => 
                            <Main>
                                <div>
                                <Route path="/main/:mainId" component={Info}></Route>
                                </div>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}