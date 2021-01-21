import React, {Component} from 'react' 
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CommentAdd from "../commentAdd/CommentAdd";
import CommentList from "../commentList/CommentList";

// css样式
import  "../../css/bootstrap.css";
import { connect } from 'react-redux';
import { comments } from '../../../src_comment03_react-redux/redux/reducers';
class App extends Component{
    static propTypes ={
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
        deleteComment:PropTypes.func.isRequired
    }
   /*  state ={
        comments:[
            {username:'jack',content:'react is nice'},
            {username:'lucy',content:'react is good'}
        ]
    }
    // 添加评论
    addComment=(comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
        console.log(this.state.comments)
        
    }
    // 删除评论
    deleteComment=(index) => {
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
    } */
    render(){
        const {comments,addComment,deleteComment} = this.props
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <CommentAdd addComment={addComment} />
                        <CommentList comments = {comments}  deleteComment={deleteComment}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(
    state => ({state:comments}),
    {addComment,deleteComment}
)(App)