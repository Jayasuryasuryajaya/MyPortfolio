import React, { useState } from 'react';
import icon from './Photos/icon.png';
import FadeContent from './FadeContent .jsx';
import confetti from "canvas-confetti";

const Project = () => {
  const [Showstudy, setShowstudy] = useState(false);
  const [Info, setInfo] = useState(false);
  const [BtndDisable,setBtnDisable]=useState(false)
  const InformationTouser = () => {
    setInfo(true)
    setTimeout(() => { 
      setBtnDisable(true);
      console.log('hii')
      },6000)
  };
  const confetties=()=>{
    confetti(
      {
        particleCount:200,
        spread:50
      }
    )
  }
  const smallStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <div>
      <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
        <div className="container-fluid p-4" style={{ minHeight: '100vh', backgroundColor: 'green'}}>
          <div className="row d-flex gap-4 ms-1 me-1" onClick={confetties}>
            {!Showstudy && (
              <div
                className="col-12 card col-md-12 col-lg-12 mb-3 p-4"
                style={{
                  boxShadow: ' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',color:'black' 
                }}
              >
                <h3 className="fw-bold fs-3 mt-2">Projects</h3>
                <div className="d-flex flex-row justify-content-center">
                  <img src={icon} alt="icon" width="40" height="40" />
                  <h2 className="fw-bold ms-1">WalkAura</h2>
                </div>
                <b className="text-center">(A Seamless Walking Companion App)</b>
                {Info && <section className="position-relative">
                  <div className="card position-absolute text-center p-4" style={{ backgroundColor: 'green', color: 'white', width: '300px', left: '50%', transform: 'translateX(-50%)' }}>
                    <b className='fw-bold fs-4 ' style={{ color: 'black' }} >Small Info</b>
                    <span
                      className="float-end text-end fw-bold fs-2"
                      style={{ cursor: 'pointer', marginTop: '-35px', color: 'black' }}
                      onClick={() => { setInfo(false) }}
                    >
                      &times;
                    </span>
                    <p>
                      This site is hosted on Glitch, where it works as a static front-end website. Locally, I used a JSON server
                      for data handling. On Glitch, the JSON data is hosted statically, so CRUD operations aren't possible. As a
                      result only GET requests are functional. The site showcases the front-end features, but currently no back-end
                      operations are active.
                    </p>
                    <button className="btn" style={smallStyle} onClick={()=>{ window.open('https://walkaura.vercel.app/') }} disabled={!BtndDisable} >View Cooked  <i class="bi bi-arrow-right my-auto"></i></button>
                  </div>
                </section>}
                <b className="text-decoration-underline fs-5 fw-bold mt-4">Brief Explanation</b>
                <b className="lh-lg">
                  WalkAura is a modern application crafted to redefine the daily walking experience with innovation and ease.
                  Built to prioritize user convenience, it offers real-time tracking that keeps users informed of their progress at
                  every step. The app integrates personalized insights to help users achieve their fitness goals effectively.
                  Motivational challenges and gamified elements are at the core of WalkAura, fostering a sense of accomplishment and
                  excitement. Its sleek and responsive design ensures compatibility across various devices, making it accessible to
                  everyone. The project embodies a perfect balance of creativity and technical precision, showcasing a dedication
                  to excellence. WalkAura isn't just an app; it's a companion for a healthier, more fulfilling lifestyle.
                </b>
                <section className="d-flex mx-auto gap-3 mb-3 mt-3 justify-content-center">
                  <button className="btn " style={smallStyle} onClick={() => { setShowstudy(true); }}>Case Study <span className='bi bi-book'>
                    </span></button>
                  <button className="btn " style={smallStyle} onClick={() => window.open('https://github.com/Jayasuryasuryajaya/WalkAura_ProjectCode')}>GitHub Link <span className='bi bi-github'></span></button>
                  <button className="btn " style={smallStyle} disabled={Info} onClick={InformationTouser}>Live Demo <span className='bi bi-arrow-up-right'></span></button>
                </section>
              </div>
            )}
            {Showstudy && (
              <div className="row" style={{colr:'black'}}>
                <section className="col-12 col-md-12 col-lg-12 col-sm-12 card d-flex text-center pt-4 pb-4 ms-3">
                  <header>
                    <span
                      className="float-end fw-bold fs-3"
                      style={{ cursor: 'pointer', marginTop: '-15px' }}
                      onClick={() => { setShowstudy(false); }}
                    >
                      &times;
                    </span>
                    <h3 className="fw-bold d-flex fs-2 align-items-center justify-content-center align-items-center">
                      <img src={icon} alt="icon" width="40" height="36" /> WalkAura: A Modern Walking Companion
                    </h3>
                  </header>
                  <b>
                    WalkAura is a thoughtfully designed application created to revolutionize how individuals approach their walking
                    routines. At its core, WalkAura is more than just a tool; it’s a companion that combines technology, design, and
                    innovation to create a seamless experience for users. The app focuses on delivering real-time data insights,
                    personalized goal-setting, and motivational challenges, all wrapped in a sleek, user-friendly interface.
                  </b>
                  <h4 className="fw-bold fs-4 mt-4 text-decoration-underline">Purpose and Vision</h4>
                  <b>
                    The inspiration behind WalkAura stems from the growing need for accessible tools that promote healthy living.
                    Walking is one of the simplest yet most effective ways to improve overall health, and WalkAura was designed to
                    elevate this everyday activity. The goal was to create an application that not only tracks progress but also
                    motivates users to push their limits, making fitness more engaging and rewarding.
                  </b>
                  <h4 className="fw-bold fs-4 mt-4 text-decoration-underline">Technological Highlights</h4>
                  <b>
                    <span className="fw-bold fs-5">Frontend:</span> The application is built with React.js, leveraging its component-based
                    architecture for a dynamic and efficient user experience. <br />
                    <span className="fw-bold fs-5">Styling:</span> Bootstrap ensures that the design is modern, responsive, and visually
                    appealing, with consistent aesthetics across all screens. <br />
                    <span className="fw-bold fs-5">API Interactions:</span> The app uses RESTful APIs to fetch and display real-time data,
                    ensuring optimal performance and reliability.
                  </b>
                  <h4 className="fw-bold fs-4 mt-4 text-decoration-underline">Conclusion</h4>
                  <b>
                    WalkAura represents the perfect blend of technology, design, and innovation. It isn’t just a fitness app; it’s a
                    statement of how technology can simplify and enhance our daily lives. By focusing on user needs and leveraging
                    cutting-edge tools, WalkAura provides an experience that is engaging, efficient, and inspiring. Whether you’re a
                    casual walker or a fitness enthusiast, WalkAura is here to help you achieve your goals and make every step count.
                  </b>
                </section>
              </div>
            )}
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Project;
