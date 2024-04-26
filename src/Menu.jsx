import React, { useState } from 'react'
import './Menu.css'

const Menu = () => {
    let [menustatus,setmenustatus]=useState(false)
  return (
    <div>
        <button  className='micon'onClick={()=>setmenustatus(!menustatus)}>&#9776;</button>
        <div className={`menu ${menustatus ? 'activemenu':''}`}>
     <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Course</li>
     </ul>
        </div>

    </div>
  )
}

export default Menu
