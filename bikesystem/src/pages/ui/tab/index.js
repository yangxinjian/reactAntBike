import React from 'react'
import {Card, Tabs, Message, Icon} from 'antd'
const TabPane = Tabs.TabPane
export default class Tab extends React.Component{
    newTabIndex = 0
    callBack = (key) => {
        Message.info('您选择了页签' + key)
    }
    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
    }
    componentWillMount () {
        const panes = [
            {
                title: 'Tab 1',
                content: 'tab1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'tab2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'tab3',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }
    render () {
        return (
            <div>
                <Card title="tab页签">
                    <Tabs defaultActiveKey="1" onChange={this.callBack}>
                        <TabPane tab="Tab 1" key="1">面板1</TabPane>
                        <TabPane tab="Tab 2" disabled key="2">面板2</TabPane>
                        <TabPane tab="Tab 3" key="3">面板3</TabPane>
                    </Tabs>
                </Card>
                <br />
                <Card title="tab带图页签">
                    <Tabs defaultActiveKey="1" onChange={this.callBack}>
                        <TabPane tab={<span><Icon type="plus"></Icon>创建</span>} key="1">面板1</TabPane>
                        <TabPane tab={<span><Icon type="delete"></Icon>删除</span>} key="2">面板2</TabPane>
                        <TabPane tab={<span><Icon type="edit"></Icon>编辑</span>} key="3">面板3</TabPane>
                    </Tabs>
                </Card>
                <br />
                <Card title="tab动态页签">
                    <Tabs 
                        type="editable-card"
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                        activeKey={this.state.activeKey}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return (
                                    <TabPane tab={panel.title} key={panel.key}></TabPane>
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}