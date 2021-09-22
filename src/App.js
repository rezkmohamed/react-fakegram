import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Login from './components/pages/auth/login/Login';
import Register from './components/pages/auth/register/Register';
import Homepage from './components/pages/Homepage/Homepage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import SearchPage from './components/pages/SearchPage/SearchPage';

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Homepage}/>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/profilepage" exact component={ProfilePage} />
      <Route path="/searchprofile" exact component={SearchPage} />
    </React.Fragment>
  );
}

export default App;
