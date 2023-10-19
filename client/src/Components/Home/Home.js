import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Tabels from "../Tables/Tabels";


export default function Home() {
  const navigate =  useNavigate();
 
  return (
    <div className='home-container'>
        <div className='home-container-top'>
            <p className='home-container-top-title'>Accounts Details</p>
            <button 
              className='home-container-top-btn'
              onClick={() =>  navigate("/function/createFunction")}
            >Add New</button>
        </div>
        <div>
          <Tabels />
        </div>
    </div>
  )
}
