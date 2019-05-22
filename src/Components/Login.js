import React,{Component} from 'react';

class Login extends Component{
    constructor()
    {
        super();
        this.state = {name:'sikha',
        users : [{name :"sikha",age:28,gender:"female"},{name :"Eva",age:1,gender:"female"},{name :"Arun",age:28,gender:"Male"}],
    
    };
}

  

    render(){
        return(
            <div className="container" >
                 <table className="table table-bordered text-left ">
                
                <tbody>
                <tr><th >Email </th> <td ><input type="text" ></input></td></tr>
                    <tr><th>Password </th>  <td><input type="text"></input></td></tr>
                </tbody>
            </table>
            <button className="btn-success">Login</button>
            </div>
                
         )}
        }


export default Login