import React from 'react';
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function App() {
  return (
    <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
  );
}

export default App;
