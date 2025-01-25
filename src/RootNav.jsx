import React from "react";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import './PortfolioCSS/Home.css';
import resume from './resume.pdf'
const RootNav = () => {
  const DownloadmyCV = () => {
    toast.success('Thanks for Downloading My Resume!', { position: 'top-center' });
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark position-sticky top-0"
        style={{ zIndex: 1000, backgroundColor: 'green' }}
      >
        <div className="container-fluid">
          <i className="navbar-brand fw-bold text-white p-1">
            <span style={{ color: 'black' }}>My</span>Portfolio
          </i>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav " style={{ cursor: 'pointer' }}>
              <li className="nav-item">
                <Link className='text-decoration-none fw-bold' to='/'>
                  <i className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ color: 'black' }}>Home</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className='text-decoration-none fw-bold' to='/Skills'>
                  <i className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ color: 'black' }}>Skills</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/Project' className='text-decoration-none fw-bold'>
                  <i className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ color: 'black' }}>Projects</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className='text-decoration-none fw-bold' to='/Experience'>
                  <i className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ color: 'black' }}>Experience</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className='text-decoration-none fw-bold' to='/About'>
                  <i className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ color: 'black' }}>About</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className='text-decoration-none fw-bold' to='/Contact'>
                  <i className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ color: 'black' }}>Contact</i>
                </Link>
              </li>
              <li className="nav-item mx-auto p-1">
                <a href={resume} download='MyResume' className="text-decoration-none">
                  <button
                    className="btn nav-link p-1 mt-1 fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" style={{ color: 'black' }}
                    onClick={DownloadmyCV}
                  >
                    Download My CV
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default RootNav;
