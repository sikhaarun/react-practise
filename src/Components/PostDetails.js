import React,{Component} from 'react';
import axios from 'axios';

class PostDetails extends Component{

    constructor(props){
        super(props);
        this.state ={PostDetails : {},
    comments:[]}
    }
    render(){
        return(

            <div className="container">
                <h1>Post Details (Id : {this.props.match.params.id})</h1>
                <table className="table table-bordered text-left">
                    <tr><th >UserId </th> <td >{this.state.PostDetails.userId}</td></tr>
                    <tr><th>PostId </th>  <td>{this.state.PostDetails.id}</td></tr>
                    <tr><th>Title </th>  <td>{this.state.PostDetails.title}</td></tr>
                    <tr><th>Post </th> <td>{this.state.PostDetails.body}</td></tr>
                </table>
            <CommentsTable comments={this.state.comments}></CommentsTable>
                

            </div>
        )
    }
    componentDidMount(){
       // const { myKey } = this.props.match.params
        console.log(this.props.match.params )

       axios(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`).then((res)=>{
           console.log(res.data)
           this.setState({PostDetails : res.data})
           axios(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`).then((res)=>{
               console.log(res)
            this.setState({comments : res.data})
           });  


       });
    }

   
   
}

const CommentsTable=(props)=>{
    console.log(props)
    return(
        
        <div className="container">
                <h3 className="text-left">Comments</h3>
              
            <table className="table table-bordered text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                  {props.comments.map((comment,index)=> <tr   key={index}>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                  </tr>)}
                </tbody>
            </table>
            </div>
    )

}

export default PostDetails;