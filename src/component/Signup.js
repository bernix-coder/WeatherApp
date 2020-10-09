import React from 'react'
import {Link} from 'react-router-dom'


import '../styles/Signup.css'
function Signup() {
    return (
        <>
       
         <div className='main '>
        
                      <form className='form-container'>
                        <h2>Sign Up</h2>

                       <div>
                       <i className="fa fa-user" aria-hidden="true"></i>
                           <input type='text' placeholder='User Name'/>
                           
                       </div>

                       <div>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                           <input type='email' placeholder='Email'/>
                           
                       </div>
                       
                        <div>
                        <i class="fa fa-lock" aria-hidden="true"></i>
                            <input type='password' placeholder='Password'/>
                          <br></br>
                           
                      
                       </div>
                       <br></br>
                       <div>
                       <Link to='/login'> <button>Sign Up</button></Link>
                       </div>
                       <br></br>
                       <div >
                     Already have an account? <Link to='/login'>Login here</Link>
                      
                    </div>
                    </form>
                  
                </div>
        
      
    
          
     
        </>
    )
}

export default Signup
