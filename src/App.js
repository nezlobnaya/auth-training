import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import './App.css';


function App() {
  
  return (
    <div className="App" style={{ padding: 30 }}>
      <div>
        <Link to='/'>Login</Link>
        <Link to='/profile'>Profile</Link>
      </div>
      <Switch>
        <PrivateRoute exact path='/profile' component={Profile} />
        <Route exact path='/' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
