import React from 'react'
import { Card, Table, Modal, message, Button } from 'antd';
import axios from '../../axios/index'
import util from '../../utils/util';
export default class TableBase extends React.Component{
    state = {
        dataSource2:[]
    }
    params = {
        page: 1
    }
    componentDidMount () {
        const dataSource = [
            {
                id: '0',
                userName: '猪猪猪',
                sex: '女',
                telephone: '888888',
                state: '1',
                interest: '5',
                birth: '1995-06-30',
                address: '地球'
            },
            {
                id: '1',
                userName: '小仙女',
                sex: '女',
                telephone: '666666',
                state: '1',
                interest: '1',
                birth: '1995-06-30',
                address: '宇宙',
            }
        ]
        dataSource.map((item,index) => {
            item.key = index
        })
        this.setState({
            data: dataSource
        })
        this.request()
    }
    // 动态获取mock数据
    request = () => {
        let _this = this
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                },
                isShowLoading: true
            }
        }).then((res) => {
            if (res.code == '0') {
                this.setState({ // 渲染dom
                    dataSource2: res.result.list,
                    selectedRowKeys: [], // 删除后的重置
                    selectedRows: null, // 删除后的重置
                    pagination: util.pagination(res, (current)=>{
                        // to-do
                        _this.params.page = current
                        _this.request()
                        message.success(`当前页${current}`)
                    })
                }) 
            }
        })
    }
    // 点击单选
    onRowClick = (record,index) => {
        let selectKey = [index]
        this.setState({
            selectedRowKeys: selectKey, // 选择的索引
            selectedItem: record // 选中的项
        })
        Modal.info({
            title: '信息',
            content: `用户名是${record.userName}`
        })
    }
    // 这样就可以写一个方法对选择中的值进行操作，比如删除等
    add = () => {
        let item = this.state.selectedItem
        if (item.id) {
            // xxx
        }
    }
    // 多选删除
    handleDelete = () => {
        let rows = this.state.selectedRows
        let ids = []
        rows.map((item) => {
            ids.push(item.id)
        })
        Modal.confirm({
            title: '删除提示',
            content: `您确定删除这些数据吗？${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功')
                this.request()
            }
        })
    }
    render () {
        const {selectedRowKeys} = this.state
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '电话',
                dataIndex: 'telephone'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render (sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '生日',
                dataIndex: 'birth'
            },
            {
                title: '状态',
                dataIndex: 'state',
                render (state) {
                    let config = {
                        '1' : '吃饱了',
                        '2' : '睡着了',
                        '3' : '喝多了',
                        '4' : '犯困了',
                        '5' : '欠揍了',
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render (state) {
                    let config = {
                        '1' : '游泳',
                        '2' : '打篮球',
                        '3' : '踢足球',
                        '4' : '吃东西',
                        '5' : '睡觉',
                        '6' : '躺着',
                        '7' : '吃东西',
                        '8' : '喝奶茶',
                    }
                    return config[state]
                }
            },
            {
                title: '地址',
                dataIndex: 'address'
            }
        ]
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys, // 必须有
                    selectedRows
                })
                
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table 
                        bordered
                        dataSource={this.state.data}
                        columns={columns}
                    />
                </Card>
                <br />
                <Card title="动态数据渲染表格">
                    <Table 
                        bordered
                        dataSource={this.state.dataSource2}
                        columns={columns}
                    />
                </Card>
                <br />
                <Card title="表格单选">
                    <Table 
                        bordered
                        dataSource={this.state.dataSource2}
                        columns={columns}
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                    />
                </Card>
                <br />
                <Card title="表格复选">
                    <div onClick={this.handleDelete}>
                        <Button>删除</Button>
                    </div>
                    <Table 
                        bordered
                        dataSource={this.state.dataSource2}
                        columns={columns}
                        rowSelection={rowCheckSelection}
                    />
                </Card>
                <br />
                <Card title="表格分页">
                    <Table 
                        bordered
                        dataSource={this.state.dataSource2}
                        columns={columns}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}