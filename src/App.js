import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

import './App.css';


function App() {
  
  return (
    <div className="App" style={{ padding: 30 }}>
      <div>
        <Link to='/'>Login</Link>
        <Link to='/profile'>Profile</Link>
      </div>
        <Route exact path='/' component={Login} />
        <Route exact path='/profile' render={props => {
          const token = localStorage.getItem('token')
          if (!token) {
            return <Redirect to='/' />
          }
          return <Profile {...props} />
        }} />
    </div>
  );
}

export default App;
