import React from 'react';
import {Menu, Icon} from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less'
import MenuItem from 'antd/lib/menu/MenuItem';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class NavLeft extends React.Component{
    componentWillMount () {
       const menuTreeNode =  this.renderMenu(MenuConfig)
       this.setState({
           menuTreeNode
       })
    }
    // 菜单渲染
    renderMenu =(data)=> {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render () {
        return (
            <div>
                {/* 菜单上面 */}
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Yang Xin Jian</h1>
                </div>
                <Menu theme="dark" mode="inline">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}