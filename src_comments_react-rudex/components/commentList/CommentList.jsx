import React, {Component} from 'react' 
import PropTypes from "prop-types";

import CommentItem from "../commentItem/CommentItem";
export default class CommentList extends Component{
    // 接收父组件传递的接口
    static propTypes = {
        comments:PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired
    }
    render(){
        const {comments,deleteComment} = this.props
        // 显示或隐藏
        const display = comments.length===0? 'block':'none'
        return(
            <div className="col-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {comments.map((comment,index) => <CommentItem comment={comment} key={index} index={index} deleteComment={deleteComment}/>)}
                </ul>
            </div>
        )
    }
}