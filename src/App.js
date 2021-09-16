import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Homepage from './components/pages/Homepage/Homepage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import Header from './components/UI/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route path="/" exact component={Homepage}/>
      <Route path="/profilepage" exact component={ProfilePage} />
    </React.Fragment>
  );
}

export default App;
