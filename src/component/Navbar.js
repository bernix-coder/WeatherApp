import React from 'react'
import "../styles/Navbar.css"
import {Link} from 'react-router-dom'

export default function Navbar({isLogin,handleLoginstate}) {
 
    return (
        <>
           <nav>
               <ul className='nav-item'>
                   {
                     isLogin?  
                     <li className='nav-list'><Link to='/login' onClick={()=>handleLoginstate(false)}>Logout</Link></li>
                     :
                     <>
                  <li className='nav-list'><Link to='/signup'>Signup</Link></li>
                  <li className='nav-list'> <Link to='/login'>Login</Link></li>
                  </>
                   } 
               </ul>
          </nav> 
        </>
    )
}
