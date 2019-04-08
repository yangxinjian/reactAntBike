import React from 'react'
import { Row, Col} from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import NavLeft from './components/NavLeft';
import './style/common.less'

export default class Admin extends React.Component{
    render () {
        return (
            <Row className="container">
                <Col className="nav-left" span="4">
                    <NavLeft />
                </Col>
                <Col className="main">
                    <Header />
                    <Row className="content" span="20">
                        content
                       {/* {this.props.children} */}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }
}