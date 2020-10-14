import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
    const [name, setName] = useState(''),[email, setEmail] = useState(''),[password, setPassword] = useState(''),
    [msg, setMsg] = useState(''),history=useHistory();

   function handleName(e){
      setName(e.target.value)  
     
   }

   function handleEmail(e){
    setEmail(e.target.value)  
   }

   function handlePassword(e){
    setPassword(e.target.value)  
   }
   function handleMsg(){
    return msg
   }


   const onSignUp=(e)=>{
       e.preventDefault()
        if(name && email && password){
            let thisUser= {name,email,password},
           usersJSON = localStorage.getItem('users'),
           users= usersJSON ? JSON.parse(usersJSON) : {}

        //    !users && users={}
           users[name]=thisUser;
          localStorage.setItem('users', JSON.stringify(users))
           setMsg('Successfully Signed up..You will be redirected to login page')
            setTimeout(()=>{
               
                history.push('/login')
            },3000)

        }else{
           setMsg('Invalid input')
        }
   }
    return (
        <>
       
         <div className='main '>
        
                      <form className='form-container'>
                        <h2>Sign Up</h2>
                   

                       <div>
                       <i className="fa fa-user" aria-hidden="true"></i>
                           <input type='text' value={name} placeholder='User Name' onChange={handleName} required/>
                           
                       </div>

                       <div>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                           <input type='email' value={email} placeholder='Email' onChange={handleEmail} required/>
                           
                       </div>
                       
                        <div>
                        <i className="fa fa-lock" aria-hidden="true"></i>
                            <input type='password' value={password} placeholder='Password' onChange={handlePassword} required/>
                          <br></br>
                           
                      
                       </div>
                       <br></br>
                       <div>
                       {/* <Link to='/login'>  */}
                       <button onClick={onSignUp}>Sign Up</button>
                            {msg? <span>{handleMsg()}</span> : null}
                       {/* </Link> */}
                       </div>
                       <br></br>
                       <div  >
                     Already have an account? <Link to='/login'>Login here</Link>
                      
                    </div>
                    </form>
                  
                </div>
        
      
    
          
     
        </>
    )
}

export default Signup
