import React from 'react'
import { Row, Col} from 'antd';
import Header from './components/header';
import Footer from './components/footer';

export default class Admin extends React.Component{
    render () {
        return (
            <Row>
                <Col span="3">
                    left
                </Col>
                <Col span="21">
                    <Header>
                        
                    </Header>
                    <Row>
                       
                    </Row>
                    <Footer>
                        
                    </Footer>
                </Col>
            </Row>
        )
    }
}