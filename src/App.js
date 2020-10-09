import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './component/Login'
import Signup from './component/Signup'


function App() {
  return (
  <div>
    <Router>
       
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
     </Router>
  </div>
  );
}

export default App;
