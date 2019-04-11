import React from 'react'
import { Card, Carousel } from 'antd';
import './index.less'
export default class Carousels extends React.Component{
    render () {
        return (
            <div>
                <Card title="文字背景轮播" >
                    <Carousel autoplay effect="fade">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                    </Carousel>
                </Card>
                <br />
                <Card title="图片背景轮播" className="slider-wrap">
                    <Carousel autoplay>
                        <div>
                            <img src="/assets/carousel-img/carousel-1.jpg" />
                        </div>
                        <div>
                            <img src="/assets/carousel-img/carousel-2.jpg" />
                        </div>
                        <div>
                            <img src="/assets/carousel-img/carousel-3.jpg" />
                        </div>
                    </Carousel>
                </Card>
                <br />
            </div>
        )
    }
}