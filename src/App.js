import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import './App.css';
import AddNewPost from './components/pages/AddNewPost/AddNewPost';
import Login from './components/pages/auth/login/Login';
import Register from './components/pages/auth/register/Register';
import ChatComponent from './components/pages/chat/ChatComponent/ChatComponent';
import DetailPostPage from './components/pages/DetailPostPage/DetailPostPage';
import FollowListPage from './components/pages/FollowListPage/FollowListPage';
import Homepage from './components/pages/Homepage/Homepage';
import LikesListPage from './components/pages/LikesListPage/LikesListPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import SearchPage from './components/pages/SearchPage/SearchPage';
import UpdateProfilePage from './components/pages/UpdateProfilePage/UpdateProfilePage';
import AuthContext from './services/auth-context';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/" exact component={Homepage}/>
      }
      {
        !authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/login" exact component={Login} />
      }
      {
        !authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/register" exact component={Register} />
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/profiles/:idProfile" exact component={ProfilePage} />
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/profile/me" exact component={ProfilePage}/>
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/update" exact component={UpdateProfilePage}/>
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/searchprofile" exact component={SearchPage} />
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/likes" exact component={LikesListPage} />
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/followlist" exact component={FollowListPage} />
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/posts/detail/:idPost" exact component={DetailPostPage} />
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/newpost" exact component={AddNewPost} />
      }
      {
        <Route path="/chat" exact component={ChatComponent} />
      }
      {/* {     
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      }
      {
        !authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      } */}
    </React.Fragment>
  );
}

export default App;
