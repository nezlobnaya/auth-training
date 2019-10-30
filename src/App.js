import React from 'react';
import { Route, Link } from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import axios from 'axios'
import './App.css';


function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App" style={{ padding: 30 }}>
      <div>
        <Link to='/'>Login</Link>
        <Link to='/profile'>Profile</Link>
      </div>
        <Route exact path='/' component={Login} />
        <Route exact path='/profile' component={Profile} />
    </div>
  );
}

export default App;
