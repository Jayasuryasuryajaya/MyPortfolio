import React from 'react'
import AboutMe from './Photos/AboutMe.png'
import Aboutme2 from './Photos/Aboutme02.png';
import FadeContent from './FadeContent ';
import confetti from "canvas-confetti";

const About = () => {
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
      <div className="container-fluid d-flex flex-row p-5 align-items-start pt-3 justify-content-center" style={{ minHeight: '100vh',backgroundColor:'green'}}>
        <div className="row" onClick={confetties}>
          <div className="col-12 card col-md-12 col-lg-12 mb-3  text-white " style={{boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}>
            <div className="p-2  lh-lg"style={{color:'black'}} >
            <h3 className='fw-bold fs-3'>About Me</h3>
              <b>Hi, I’m Surya, a passionate and dedicated final-year Computer Science Engineering student with a strong interest in web development. I specialize in crafting responsive, user-friendly web applications using technologies like React.js, JavaScript, HTML, CSS, and modern frameworks such as Bootstrap.
                Throughout my academic journey and internships, I’ve gained hands-on experience in building static websites, organizing tech events, and exploring innovative approaches in the tech space. My enthusiasm for web development stems from my love for creating visually appealing designs and seamless user experiences.

                I am a proactive learner who enjoys staying updated with the latest trends in web technologies and thrives on solving complex problems. With a commitment to delivering impactful solutions, I aim to contribute to the tech industry by building scalable and innovative web applications.

              </b>
              <p className='fw-bold'>Mail : <a href="mailto:njayasurya001@gmail.com">njayasurya001@gmail.com</a> <br />
              <span className='fw-bold'>Contact Number : 7200877947</span></p>
              
              <button className='btn mx-auto' style={{backgroundColor:'black',color:'white'}}>For Contact</button>
              
              <div className="col-12 mb-3 ">
              <div className=" p-4 img-fluid img-responsive rounded image-container d-flex flex-row justify-content-center gap-3">
          <img src={AboutMe} alt="Aboutme" className='col-6 col-lg-4 img-responsive rounded h-50' width='250'  />
          <img src={Aboutme2} alt="SomePhotos" className=' col-6 col-lg-4 img-responsive rounded h-50' width='250' height='300' />
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeContent>

    </div>
  )
}

export default About
