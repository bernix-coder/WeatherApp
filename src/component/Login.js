import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import weather from '../images/weather.png'
import '../styles/Login.css'
function Login({handleLoginstate}) {
    
    const [userName, setUserName]=useState(''),
    [alert, setAlert] = useState(''),
    [password,setPassword] =useState(''),history =useHistory()
  
    function handleName(e){
        setUserName(e.target.value)
    }

    function handlePassword (e){
        setPassword(e.target.value)
    }

  
    function handleLoginClick(e){
        e.preventDefault()
        let users = JSON.parse(localStorage.getItem('users'))
         if(users !==null){
             let user =users[userName]
            if (user && user.password===password){
                handleLoginstate(true)
                history.push('/')
            }
            else
               setAlert('Wrong user name or password') 
         }
         else
            setAlert('Unknown user..Signup')
        }
    return (
        <>
      
         <div className='container'>
           <div className='row'>
                <div className='col-2'>
                    <img  src={weather} alt='img1'/>
                 
                   <p><Link  to='/signup'>Create an account</Link></p> 
                </div>

                <div className='col-2'>
                    <form className='info'>
                        <h2>Log In</h2>

                       <div >
                       <i className="fa fa-user" aria-hidden="true"></i>
                           <input type='text' placeholder='User Name' value={userName} onChange={handleName}/>
                           
                       </div>
                       
                        <div>
                        <i className="fa fa-lock" aria-hidden="true"></i>
                            <input type='password' placeholder='Password'value={password} onChange={handlePassword}/>
                     
                     
                       </div>
                       <br></br>
                       <div>
                           <button type='submit'  onClick={handleLoginClick}> Login</button>


                       </div>

                       <div>
                       <span>{alert}</span>
                       </div>
<br></br>
                       <div className='media'>
                       Or login with 
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                    </div>
                    </form>
                  
                </div>
           </div>
          
         </div>
        </>
    )
}

export default Login
