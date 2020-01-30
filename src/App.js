import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { Homepage } from "./HomePage/HomePage";

const App = () => {
  return (
    <Router>
        <Switch>
            {/*  index paga aka newsfeed page */}
            <Route
              exact
              path="/"
              render={() => {
                  return <Homepage />;
              }}
            />

            {/* not found */}
            <Route
              render={() => {
                  return <div>Invalid url</div>;
              }}
            />
        </Switch>
    </Router>
  );
};

export default App;
