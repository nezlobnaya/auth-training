import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { getToken } from './utils/axiosWithAuth'
import './App.css';


function App() {
  const signedIn = getToken()
  return (
    <div className="App" style={{ padding: 30 }}>
      <div>
        {!signedIn && <Link to='/'>Login</Link>}
        {signedIn && <Link to='/profile'>Profile</Link>}
      </div>
      <Switch>
        <PrivateRoute exact path='/profile' component={Profile} />
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
