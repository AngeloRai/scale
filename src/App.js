import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Countries} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
