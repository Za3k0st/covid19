import React from 'react';
import { Theme } from '@liquid-design/liquid-design-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Localization from "./Localization";
import Dataset from "./Dataset"
import Statistic from "./Statistic"
import Nav from "./Nav"
import './App.css';

function App() {
  return (
    <Theme>
      <Nav />
      <div className="App">
        <Router>
          <Switch>
            <Route path="/localization" component={Localization} />
            <Route path="/dataset" component={Dataset} />
            <Route path="/" component={Statistic} />
          </Switch>
        </Router>
      </div>
    </Theme>)
}

export default App;
