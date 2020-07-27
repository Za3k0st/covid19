import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AuthProvider from "./contexts/AuthContext";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import './App.css';

function App() {
  //localStorage.clear()
  return (
    <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Router>
    </AuthProvider>)
}

export default App;
