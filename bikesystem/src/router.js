import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/button'
import NoMatch from './components/nomatch';
import Modal from './pages/ui/modal'
import Loading from './pages/ui/loading';
import Notification from './pages/ui/notification';
import Messages from './pages/ui/message';
import Tab from './pages/ui/tab';
import Gallery from './pages/ui/gallery';
import FormLogin from './pages/form/login';
import Carousels from './pages/ui/carousels';
import Registers from './pages/form/register';
export default class IRouter extends React.Component{
    render () {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={() => 
                        // 二级路由
                        <Admin>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route path="/admin/ui/modals" component={Modal}/>
                            <Route path="/admin/ui/loading" component={Loading}/>
                            <Route path="/admin/ui/notification" component={Notification}/>
                            <Route path="/admin/ui/messages" component={Messages}/>
                            <Route path="/admin/ui/tabs" component={Tab}/>
                            <Route path="/admin/ui/gallery" component={Gallery}/>
                            <Route path="/admin/form/login" component={FormLogin}/>
                            <Route path="/admin/ui/carousel" component={Carousels}/>
                            <Route path="/admin/form/reg" component={Registers}/>
                            <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App>
            </HashRouter>
        )
    }
}