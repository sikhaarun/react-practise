import React,{Component} from 'react';
import axios from 'axios';

class Users extends Component{

    constructor(props){
        super(props);
        this.state ={users : []}
    }

    componentDidMount()
    {
        axios('https://jsonplaceholder.typicode.com/users').then(res=>{
            console.log(res);
            this.setState({users:res.data});
        })
    }

   
    render(){
        return(
            <div className="container">
                <h1>Users</h1>
            <table className="table table-bordered text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user,index)=> <tr  key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>)}
                </tbody>
            </table>
            </div>
        )
    }
}


export default Users;