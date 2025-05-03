import React from 'react'
import { useState } from 'react'
import "../style.css"

const SettingPage = () => {
    const [avaible,setAvaible]=useState(false)
    const rest=['Food shop','Chinnese Shop','Food shop 1']
    const resToggle=()=>{
        setAvaible(...avaible)
    }
  return (
    <div>
      {rest.map((elem,index)=>(
        <div key={index} className='shops'>{elem}<button>{avaible?"On":"Off"}</button></div>
      ))}
    </div>
  )
}

export default SettingPage
