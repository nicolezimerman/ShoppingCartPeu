import React from "react";
import "./App.scss";
import PrincipalPage from "./screens/PrincipalPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/">
          <PrincipalPage />
        </Route>
      </Router>
    </>
  );
};

export default App;
