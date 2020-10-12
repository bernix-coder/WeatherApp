import React, { useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Login from './component/Login'
import Navbar from './component/Navbar';
import Signup from './component/Signup'


function App() {
  const [isLogin,setLoginState] =useState(false)
  function handleLoginstate(state){
    setLoginState(state)
  }
  return (
  <div>
    
    <Router>
       <Navbar {...{handleLoginstate,isLogin}}/>
        <Switch>
  <Route exact path='/' component={Homepage}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={()=><Login handleLoginstate={handleLoginstate}/>}/>
        </Switch>
     </Router>
  </div>
  );
}

export default App;
