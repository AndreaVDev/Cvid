import React from "react";
import './App.css';
import Home from "./Home";
import ViewDetails from "./ViewDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
             <Route
              exact
              path="/view-details/:id"
              component={ViewDetails}
            />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

