import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import './App.css';
import AddNewPost from './components/pages/AddNewPost/AddNewPost';
import Login from './components/pages/auth/login/Login';
import Register from './components/pages/auth/register/Register';
import DetailPostPage from './components/pages/DetailPostPage/DetailPostPage';
import Homepage from './components/pages/Homepage/Homepage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import SearchPage from './components/pages/SearchPage/SearchPage';
import AuthContext from './services/auth-context';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      {
        authCtx.isLoggedIn &&
        <Route path="/" exact component={Homepage}/>
      }
      {
        !authCtx.isLoggedIn &&
        <Route path="/login" exact component={Login} />
      }
      {
        !authCtx.isLoggedIn &&
        <Route path="/register" exact component={Register} />
      }
      {
        authCtx.isLoggedIn &&
        <Route path="/profiles/:idProfile" exact component={ProfilePage} />
      }
      {
        authCtx.isLoggedIn &&
        <Route path="/searchprofile" exact component={SearchPage} />
      }
      {
        authCtx.isLoggedIn &&
        <Route path="/posts/detail/:idPost" exact component={DetailPostPage} />
      }
      {
        authCtx.isLoggedIn &&
        <Route path="/newpost" exact component={AddNewPost} />
      }
      {     
        authCtx.isLoggedIn &&
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      }
      {
        !authCtx.isLoggedIn &&
        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      }
    </React.Fragment>
  );
}

export default App;
