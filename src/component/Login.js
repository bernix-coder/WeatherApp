import React from 'react'
import {Link} from 'react-router-dom'
import weather from '../images/weather.png'
import '../styles/Login.css'
function Login() {
    return (
        <>
      
         <div className='container'>
           <div className='row'>
                <div className='col-2'>
                    <img  src={weather}/>
                 
                   <p><Link  to='/signup'>Create an account</Link></p> 
                </div>

                <div className='col-2'>
                    <form className='info'>
                        <h2>Log In</h2>

                       <div >
                       <i className="fa fa-user" aria-hidden="true"></i>
                           <input type='text' placeholder='User Name'/>
                           
                       </div>
                       
                        <div>
                        <i class="fa fa-lock" aria-hidden="true"></i>
                            <input type='password' placeholder='Password'/>
                     
                     
                       </div>
                       <br></br>
                       <div>
                           <input type='submit' value='Login'/>
                       </div>
<br></br>
                       <div className='media'>
                       Or login with 
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                        <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                    </div>
                    </form>
                  
                </div>
           </div>
          
         </div>
        </>
    )
}

export default Login
