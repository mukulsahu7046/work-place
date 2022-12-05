import React from 'react'
import './Section3.css';
import teacher from '../../assets/teacher.png'

function Section3() {
  return (
    <>
    <div className='oval'><span className='oval-span'>Find More Jobs</span></div>

    <div className='main-div'>
      <img src={teacher} alt="teacher" className='teacher'/>
      <span className='get-matched'>Get Matched The Most Valuable Jobs, Just Drop Your CV at Staffing Solutions</span>
      <span className='big-line'>In the subject line of email, write your name, the description of the position you want to apply</span>
    </div>
    </>
      
  )
}

export default Section3