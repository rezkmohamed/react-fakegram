import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Homepage from './components/pages/Homepage/Homepage';

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Homepage}/>
    </React.Fragment>
  );
}

export default App;
