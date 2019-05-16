import React from 'react'
import {Button,Card,Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg' // 引用富文本编辑器组件
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css' // 引用样式
import draftjs from 'draftjs-to-html' // 引用转换富文本编辑的转换html格式
export default class RichText extends React.Component{

    state = {
        showRichText:false,
        editorContent: '',
        editorState: '',
    };
    // 清空富文本编辑器里面的内容
    handleClearContent = ()=>{
        this.setState({
            editorState:''
        })
    }
    // 在modal中展示富文本编辑器输入内容
    handleGetText = ()=>{
        this.setState({
            showRichText:true
        })
    }

    // 内容状态 == 获取输入的值
    onEditorChange = (editorContent) => {
        this.setState({
            editorContent,
        });
    };
    // 编辑状态
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    };

    render(){
        const { editorContent, editorState } = this.state;
        return (
            <div>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
                    <Button type="primary" onClick={this.handleGetText}>获取HTML文本</Button>
                </Card>
                <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}
                        onContentStateChange={this.onEditorChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={()=>{
                        this.setState({
                            showRichText:false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.editorContent)}
                </Modal>
            </div>
        );
    }
}