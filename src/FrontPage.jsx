import React, { useEffect } from 'react';
import './PortfolioCSS/Front.css';
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
  const navigate=useNavigate()
useEffect(()=>{
  const timer = setTimeout(() => {
    navigate('/Home')
  }, 3000);
  return () => clearTimeout(timer);
})
  return (
    <div className={`text-container `}>
      <div className={ `text` }>Hello! <br />I'm JayaSurya</div>
    </div>
  );
};



export default FrontPage;
