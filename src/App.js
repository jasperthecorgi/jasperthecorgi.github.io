import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./oldpages/HomePage/HomePage";
import { Gallery } from "./oldpages/Gallery/Gallery";
import { Discount } from "./oldpages/Discount/Discount";

const App = () => {
  return (
    <Router>
      <Switch>
        {/*  index paga aka newsfeed page */}
        <Route
          exact
          path="/"
          render={() => {
            return <Discount />;
          }}
        />

        <Route
          exact
          path="/home"
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
