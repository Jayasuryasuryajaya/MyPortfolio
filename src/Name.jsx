import React from 'react';
import Surya2 from './Photos/Surya2.jpg';
import FadeContent from './FadeContent ';
import './PortfolioCSS/Name.css'
import {Link} from 'react-router-dom';
import confetti from "canvas-confetti";
const Name = () => {
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
      <div className="name-container d-flex justify-content-center" style={{ minHeight: '100vh',backgroundColor:'green' }}>
        <div
          className="row p-5 d-flex mt-5 flex-row align-items-start  rounded" onClick={confetties}
        >
          <div className="shapeChange col-12 d-flex">

            <div className="col-10 col-md-6 col-lg-6 col-sm-6 col-md-6 justify-content-center gap-1 d-flex" >
              <img
                width="250"
                height="300"
                src={Surya2}
                alt="Jaya Surya"
                className="profile-image rounded"
              />
            </div>
            <div className="Textuh col-10 col-md-7 col-sm-7 col-lg-6">
              <div style={{ fontSize: '25px',color:'black' }}>
                <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>

                 <b>I'm Jaya Surya | Crafting User Experiences with React.js  I'm a front-end developer passionate about building responsive and user-friendly web applications.</b> 
                </FadeContent>
              </div>
              <div className="col" >
                <section className="button d-flex flex-column">
                  <div className="socialLinks d-flex gap-3 mb-3 mt-3">
                    <span onClick={()=>{window.open('https://www.linkedin.com/in/jayasurya7200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}}
                      
                      className="linkedin bi bi-linkedin fs-4 fw-bold text-white"
                    ></span>
                    <span onClick={()=>{window.open('https://github.com/Jayasuryasuryajaya')}} className="bi bi-github fs-4 fw-bold text-white"></span>
                    <span onClick={()=>{window.open('https://wa.me/7200877947')}}  className="bi bi-whatsapp fs-4 fw-bold text-white"></span>
                    <span onClick={()=>{window.open('https://www.instagram.com/suryaa19._?igsh=MWU2eHdhbDFzdDQxbQ==')}}  className="bi bi-instagram fw-bold fs-4 text-white"></span>
                    <span onClick={()=>{window.open('mailto:njayasurya001@gmail.com')}} className='bi bi-envelope fw-bold fs-4 text-white'></span>
                  </div>
                  <div className="button">
                    <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
               <Link to='/Contact'>
                      <button className='btn text-white text-center' style={{ width: '115px',backgroundColor:'black' }}>Contact Me</button>
                  </Link>
                    </FadeContent>
                  </div>
                </section>
              </div>
            </div>

          </div>
        </div>
      </div>
      </FadeContent>
            
    </div>
  );
};

export default Name;
