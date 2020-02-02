import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/HomePage/HomePage";
import { Gallery } from "./pages/Gallery/Gallery";

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

        <Route
          exact
          path="/gallery"
          render={() => {
            return <Gallery />;
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
