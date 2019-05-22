import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Components/Login'
import NavBar from './Components/NavBar';
import Posts from './Components/Posts';
import Users from './Components/Users';
import PostDetails from './Components/PostDetails';


import {BrowserRouter,Route} from 'react-router-dom';



ReactDOM.render(  
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>
      <Route exact path="/" component={Users}/>
      <Route exact path="/Users" component={Users}/>
      <Route exact path="/Posts" component={Posts}/> 
      <Route exact path="/Posts/:id" component={PostDetails}/> 
      <Route exact path="/Login" component={Login}/> 
    </div>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
