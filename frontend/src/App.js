import './App.css';
import React, { Component } from 'react'
import PostList from './Components/Post/PostList';
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/LoginPage/Login';
import './index.css';
import CreatePost from './Components/Post/CreatePost';
import EditPost from './Components/Post/EditPost';
import ShowPost from './Components/Post/ShowPost';
import Register from './Components/LoginPage/Register';
import SavedPost from './Components/Post/SavedPost';
import AllUsers from './Components/Post/AllUsers';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/posts' component={PostList} />
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/new' component={CreatePost} />
        <Route exact path='/posts/edit/:id' component={EditPost} />
        <Route exact path='/posts/show/:id' component={ShowPost} />
        <Route exact path='/allusers' component={AllUsers} />
        <Route exact path='/saved' component={SavedPost} />
        </Switch>
      </div>
    )
  }
}
