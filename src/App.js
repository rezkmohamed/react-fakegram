import React, { useContext } from 'react';
import { Provider } from 'react-redux';
import { Redirect,Route } from 'react-router';
import './App.css';
import store from './store';
import AddNewPost from './components/pages/AddNewPost/AddNewPost';
import AnswerToPendingQuestionPage from './components/pages/AnswerToPendingQuestionPage/AnswerToPendingQuestionPage';
import Login from './components/pages/auth/login/Login';
import Register from './components/pages/auth/register/Register';
import ChatComponent from './components/pages/chat/ChatComponent/ChatComponent';
import DetailPostPage from './components/pages/DetailPostPage/DetailPostPage';
import FollowListPage from './components/pages/FollowListPage/FollowListPage';
import Homepage from './components/pages/Homepage/Homepage';
import LikesListPage from './components/pages/LikesListPage/LikesListPage';
import PendingQuestionsPage from './components/pages/PendingQuestionsPage/PendingQuestionsPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import SearchPage from './components/pages/SearchPage/SearchPage';
import UpdateProfilePage from './components/pages/UpdateProfilePage/UpdateProfilePage';
import AuthContext from './services/auth-context';
import NotificationsPage from './components/pages/NotificationsPage/NotificationsPage';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Provider store={store}>
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
        <Route path="/notifications" exact component={NotificationsPage} />
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
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/pending" exact component={PendingQuestionsPage} />
      }
      {
        authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path="/answerquestion" exact component={AnswerToPendingQuestionPage} />
      }

      {
        <Route path="/chat" exact component={ChatComponent} />
      }
            {
        !authCtx.isLoggedIn && !authCtx.pendingStorageCheck &&
        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      } 

      {/* 
      {     
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
      } 
      */}
      </Provider>
    </React.Fragment>
  );
}

export default App;
