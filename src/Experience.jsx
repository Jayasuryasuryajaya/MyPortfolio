import React from 'react'
import FadeContent from './FadeContent ';
import confetti from "canvas-confetti";

const Experience = () => {
  const confetties=()=>{
    confetti(
      {
        particleCount:200,
        spread:50
      }
    )
  }
  return (
    <div>
      <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
      <div className="container-fluid  d-flex pb-5 p-5 justify-content-center align-items-start pt-3" style={{minHeight:'100vh',backgroundColor:'green'}}>
        <div className="row d-flex flex-column gap-3" onClick={confetties}>
          <div className="col-12 col-lg-12 col-md-12 col-sm-12 card p-4" style={{boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',color:'black'}}>
          <h3 className='fw-bold fs-3'>Internships</h3>
                  <b className='text-decoration-underline  fs-5'>Intern at Startnet Ventures Pvt Limited</b>
                 <section className='d-flex justify-content-between mt-2'>
                 <b  className='text-decoration-underline  fs-5'>
                  Role: Intern – Web Development & Event Management</b>
                 <b  className='text-decoration-underline fs-5'>Duration: 35 Days</b>
                 </section>
                 <b className='lh-lg mt-2'>During my internship at Startnet Ventures, I gained hands-on experience in static website creation using HTML, CSS, and JavaScript. I also took part in organizing the GenAI Connect Summit Expo 2024, where I was responsible for event coordination, ensuring smooth execution, and managing logistics. Additionally, I was taught AI referencing techniques, which enhanced my understanding of integrating AI into web development.</b>
                 <section className='mt-3'>
                 <h5 className='text-decoration-underline'>Key Skills Gained:</h5>
                 <ul className='fw-bold'>
                  
                  <li>Web development (HTML, CSS, JavaScript)
                  </li>
                  <li>Event management and coordination</li>
                  <li>AI implementation in web projects</li>
                 </ul>
                 </section>
          </div>
          <div className="col-12 col-lg-12 col-md-12 col-sm-12 card p-4" style={{boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',color:'black'}}>
                 <b className='text-decoration-underline  fs-5'> Intern at Stack-Queue Education Academy</b>
                 <section className='d-flex justify-content-between m-1 mt-2'>
                 <b  className='text-decoration-underline  fs-5'>
                 Role: Intern – Full-Stack Development</b>
                 <b  className='text-decoration-underline fs-5'>Duration: 15 Days</b>
                 </section>
                 <b className='lh-lg mt-2'>At Stack-Queue Education Academy, I undertook a short-term full-stack development course that exposed me to both front-end and back-end technologies. I worked on various tasks, such as creating small projects and enhancing my learning capacity through practical assignments. This experience helped me develop a strong understanding of the entire web development lifecycle.</b>
                 <section className='mt-3'>
                 <h5 className='text-decoration-underline'>Key Skills Gained:</h5>
                 <ul className='fw-bold'>
                  
                  <li>Real time practices in HTML, CSS, JavaScript
                  </li>
                  <li>Hands-on practice with front-end frameworks like React.js</li>
                  <li>Problem-solving and project-based learning</li>
                 </ul>
                 </section>
          </div>
        </div>
      </div>
      </FadeContent>

    </div>
  )
}

export default Experience
