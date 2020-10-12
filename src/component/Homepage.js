import React from 'react'
import "../styles/Homepage.css"

function Homepage() {
    return (
        <>
      
            <div>
                <input className='city-name' type='text' placeholder='City'/>
            
                <input className='country-name' type='text' placeholder='Country'/>
                <button>Get Weather</button>
            </div>
        </>
    )
}

export default Homepage
