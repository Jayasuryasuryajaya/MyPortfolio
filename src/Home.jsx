import React from "react";
import RootNav from './RootNav.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer } from "react-toastify";
import { Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage.jsx';
const Experience = React.lazy(() => import('./Experience.jsx'))
const About = React.lazy(() => import('./About.jsx'));
const Name = React.lazy(() => import('./Name.jsx'));
const Skills = React.lazy(() => import('./Skills.jsx'))
const Contact = React.lazy(() => import('./Contact.jsx'));
const Project = React.lazy(() => import('./Project.jsx'))
const Home = () => {
  return (
    <div className="fonts position-sticky top-0">
      <ToastContainer theme='dark' />
      <RootNav />
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/Home' element={<Name />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />


      </Routes>
    </div>
  );
};

export default Home;
