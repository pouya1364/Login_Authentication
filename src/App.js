import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './component/Dashboard/Dashboard';
import Preferences from './component/Preferences/Preferences';
import Login from './component/Login/Login';

import useToken from './useToken';



function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (

          <div className="wrapper">
          <h1>Application</h1>
          <BrowserRouter>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/preferences">
                <Preferences />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>

  
  );
}

export default App;
