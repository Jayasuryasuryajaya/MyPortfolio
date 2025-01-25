import { useEffect, useState } from 'react'
import { Progress } from 'antd';
import confetti from "canvas-confetti";
import FadeContent from './FadeContent .jsx';
import css from './Photos/css.png';
import github from './Photos/github.png'
import react from './Photos/react.jpg';
import javascript from './Photos/javascript.png';
import html from './Photos/html.png';
import bootstrap from './Photos/bootstrap.png';
const Skills = () => {
  const [Html,setHtml]=useState(0)
  const [CSS,setCSS]=useState(0)
  const [Bootstrap,setBootstrap]=useState(0)
  const [Javascript,setJavascrit]=useState(0)
  const [React,setReact]=useState(0)
  const [Github,setGithub]=useState(0)
const List=['HTML','CSS','Bootstrap','JavaScript','React js','GitHub']
const Langicon=[html,css,bootstrap,javascript,react,github]
const Percentage=[Html,CSS,Bootstrap,Javascript,React,Github];
  useEffect(()=>{
 const interval=setInterval(()=>{
   setHtml(prev=>(prev < 90?prev+1: prev+0))
   setCSS(prev=>(prev < 80?prev+1: prev+0))
   setBootstrap(prev=>(prev < 75?prev+1: prev+0))
   setJavascrit(prev=>(prev < 80?prev+1: prev+0))
   setReact(prev=>(prev < 70?prev+1 : prev+0))
   setGithub(prev=>(prev < 70?prev+1 : prev+0))
  },30)
return ()=>{clearInterval(interval)}
  },[])

  const confetties=()=>{
    confetti(
      {
        particleCount:250,
        spread:70
      }
    )
  }
  return (
    <div>
     <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
    <div className='container-fluid p-4 d-flex flex-column align-items-start' onClick={confetties} style={{minHeight:'100vh',backgroundColor:'green',boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',color:'black'}}>
    <h3 className='fs-3 fw-bold'>Skills</h3>
      <header className='d-flex flex-row justify-content-evenly w-100 mt-2 mb-3'>
        {Langicon.map((item,index)=>(
          <div key={index} style={{cursor:'pointer'}}>
            <img src={item} alt="languageicons" className='shadow rounded' width='40' height='40'/>
          </div>

        ))}
      </header>
   
   <div className="row">
    {List.map((list,index)=>(
      <div className="col-12 col-md-6 col-lg-4 mb-3" key={index} >
              <div className="card text-center  cart-title p-5 ms-1" style={{cursor:'pointer'}}>
               <h3 className='mb-4'>{list}</h3>
               <div style={{ width: 100, height: 100 }} className='align-self-center'>
            <Progress type="circle" percent={Percentage[index]} strokeColor="green"   style={{
          transition: "stroke-dashoffset 30s ease-out"
        }} />
     </div>
              </div>
          
           </div>
    ))}
           
   </div> 
   <footer style={{width:'100%'}}>
    <div className="row d-flex flex-row " >
      <div className="col-12 col-md-6 col-lg-6" onClick={confetties}>
      <div className="card p-1 text-center mb-3" style={{height:'fit-content'}}>
      <b className='car-title fs-4 fw-bold'>Web Development</b>
      <b className='card-text fw-normal fs-5'>HTML <sup>.</sup> CSS <sup>.</sup> Bootstrap <sup>.</sup> JavaScript <sup>.</sup> React js</b>
      </div>
      
      </div>
      <div className="col-12  col-md-6 col-lg-6" onClick={confetties}>
      <div className="card p-1 text-center" style={{height:'fit-content'}}>
            <b className='car-title fs-5 fw-bold'>Tools</b>
            <b className='car-text fs-5 fw-normal'>Git <sup>.</sup> GitHub <sup>.</sup> Canva <sup>.</sup> ClickUp</b>
      </div>
      </div>
       </div>
   </footer>

    </div>
    </FadeContent>

    </div>
  )
}

export default Skills
