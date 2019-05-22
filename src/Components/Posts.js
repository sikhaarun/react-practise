import React,{Component} from 'react';
import axios from 'axios';

class Posts extends Component{

    constructor(props){
        super(props);
        this.state ={posts : []}
    }

    componentDidMount()
    {
        axios('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log(res);
            this.setState({posts:res.data});
        })
    }

    getPostById=(id)=>{
        console.log(id)
        this.props.history.push(`/Posts/${id}`)
       // this.props.navigation.navigate('/PostsDetails/'+id)
    }
    render(){
        return(
            <div className="container">
                <h1>Posts</h1>
            <table className="table table-bordered text-left">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.posts.map((post,index)=> <tr onClick={()=>this.getPostById(post.id)}  key={index}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>)}
                </tbody>
            </table>
            </div>
        )
    }
}


export default Posts;