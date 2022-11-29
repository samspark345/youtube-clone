import React from 'react'
import './sideBarRow.css'

function SidebarRow(props) {
  return (
    <div 
        className='sideBarRowDetails'
        onClick={() =>{
            window.open("https://www.youtube.com/watch?v=NT299zIk2JY&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP");
        }}
    >
        <div className='icon'>
            {props.icon} 
        </div>
        <h1 className='title'>{props.title} </h1>
    </div>
  )
}

export default SidebarRow