import React, {Component} from 'react' 
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CommentAdd from "../../components/commentAdd/CommentAdd";
import CommentList from "../../components/commentList/CommentList";
import { addComment,deleteComment } from "../../reduce/actions";

// css样式
import  "../../css/bootstrap.css";


class App extends Component{
    static propTypes ={
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
        deleteComment:PropTypes.func.isRequired
    }
  
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
    state => ({comments:state}),
    {addComment,deleteComment}
)(App)