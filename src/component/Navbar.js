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
                     <div>
                     <li className='nav-list'><Link onClick={()=>handleLoginstate(false)}>Search History</Link></li>
                     <li className='nav-list'><Link to='/login' onClick={()=>{}}>Logout</Link></li>
                     </div>
                     :
                     <>
                   <li className='nav-list'><Link to='/'>Home</Link></li>
                  <li className='nav-list'> <Link to='/login'>Login</Link></li>
                  <li className='nav-list'><Link to='/signup'>Signup</Link></li>
                  </>
                   } 
               </ul>
          </nav> 
        </>
    )
}
