import React from 'react'
import NavBar from './NavBar'
import img1 from "../..//assets/jobdoor.png";
import "./HeaderSection.css"
function HeaderSection() {
  return (
    <div>
        <NavBar/>
        <div className='label'>
          <h1>Get The <span style={{color:"#4540DB"}}>Right Job</span> You Deserve</h1>
        <img className="jobdoor" src={img1} alt="jobdoor"/>
        <p>786 jobs & 110 candidates are registeresd</p>

        </div>
    </div>
  )
}

export default HeaderSection