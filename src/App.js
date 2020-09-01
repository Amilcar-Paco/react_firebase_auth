import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Login from './Signin'
import SignUp from './SignUp'
import { AuthProvider } from './Authentication';
import PrivateRoute from './PrivateRouter';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
