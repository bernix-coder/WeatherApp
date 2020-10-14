import React, { useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Login from './component/Login'
import Navbar from './component/Navbar';
import Signup from './component/Signup'


function App() {
  const [isLogin,setLoginState] =useState(false)
  const [username,setUsername] =useState("");
  
  function handleLoginstate(isLogin, username) {
    setLoginState(isLogin);
    setUsername(username);
  }
  return (
  <div>
    
    <Router>
       <Navbar {...{handleLoginstate,isLogin}}/>
        <Switch>
          <Route exact path='/' component={()=> <Homepage isLogin={isLogin} username={username} />}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={()=><Login handleLoginstate={handleLoginstate}/>}/>
        </Switch>
     </Router>
  </div>
  );
}

export default App;
