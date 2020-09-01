import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Component/Login/Login";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Login {...props} />}
        ></Route>

        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
