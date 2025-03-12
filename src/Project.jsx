import React, { useState } from 'react';
import icon from './Photos/icon.png';
import movieIcon from './Photos/iconmovieorbit.png';
import FadeContent from './FadeContent .jsx';
import confetti from 'canvas-confetti';

const Project = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = [
    {
      name: 'WalkAura',
      smallInfo: '(A Seamless Walking Companion App)',
      explanation:
        "WalkAura is a modern application crafted to redefine the daily walking experience with innovation and ease. Built to prioritize user convenience, it offers real-time tracking that keeps users informed of their progress at every step. The app integrates personalized insights to help users achieve their fitness goals effectively. Motivational challenges and gamified elements are at the core of WalkAura, fostering a sense of accomplishment and excitement. Its sleek and responsive design ensures compatibility across various devices, making it accessible to everyone. The project embodies a perfect balance of creativity and technical precision, showcasing a dedication to excellence. WalkAura isn't just an app; it's a companion for a healthier, more fulfilling lifestyle.",
      icon: icon,
      liveLink: 'https://walkaura.vercel.app/',
      githubLink: 'https://github.com/Jayasuryasuryajaya/WalkAura_ProjectCode',
    },
    {
      name: 'MovieHub',
      smallInfo: '(Movie Database with TMDb API)',
      explanation:
        "MovieHub is a movie browsing platform powered by the TMDb API, providing users with an extensive library of movies, their details, and ratings. The platform features a modern and responsive user interface designed for smooth navigation. Users can search for movies, view trending content, and get detailed information about their favorite films. The project showcases the integration of RESTful APIs and dynamic data rendering using React, highlighting the developer's proficiency in front-end development and API consumption.",
      icon: movieIcon,
      liveLink: 'https://movieorbit.vercel.app/',
      githubLink: 'https://github.com/Jayasuryasuryajaya/TMDB_MovieSite',
    },
  ];

  const triggerConfetti = () => {
    confetti({ particleCount: 200, spread: 50 });
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <div>
      <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
        <div className="container-fluid p-4" style={{ minHeight: '100vh', backgroundColor: 'green' }}>
          <div className="row d-flex gap-4 ms-1 me-1" onClick={triggerConfetti}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="col-12 card mb-3 p-4"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                  color: 'black',
                }}
              >
                <div className="d-flex flex-row justify-content-center">
                  <img src={project.icon} alt="icon" width="40" height="40" />
                  <h2 className="fw-bold ms-1">{project.name}</h2>
                </div>
                <b className="text-center">{project.smallInfo}</b>

                {activeProjectIndex === index && <b className="lh-lg">{project.explanation}</b>}
                <section className="d-flex mx-auto gap-3 mb-3 mt-3 justify-content-center">
                  <button className="btn" style={buttonStyle} onClick={() => window.open(project.githubLink)}>
                    GitHub Link <span className="bi bi-github"></span>
                  </button>
                  <button
                    className="btn"
                    style={buttonStyle}
                    onClick={() => setActiveProjectIndex(activeProjectIndex === index ? null : index)}
                  >
                    Toggle Info
                  </button>
                  <button
                    className="btn"
                    style={buttonStyle}
                    onClick={() => window.open(project.liveLink)}
                  >
                    Live Demo
                  </button>
                </section>
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Project;
