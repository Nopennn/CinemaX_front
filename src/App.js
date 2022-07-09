import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Link} from "react-router-dom";


function App() {
  return (
      <div>
          <header>
              <Link to="/">Home </Link>
              <Link to="/login">Authorisation </Link>
              <Link to="/user">My profile </Link>
              <h1>Cinema</h1>
          </header>
          <div>
              <AppRouter/>
          </div>
      </div>
  );
}

export default App;
