import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { HandleLogOut } from '../../Api/AuthAPI';

export default function Header() {
  const navigation = useNavigate();

  return (
    <div className='header-container'>
        <div className='header-left'>
            <img src='https://images.pexels.com/photos/5759215/pexels-photo-5759215.jpeg?cs=srgb&dl=pexels-varun-5759215.jpg&fm=jpg' 
                 className='header-left-profile'
                 alt='profile pic'
            />
            <p className='header-left-title'>marriage</p>
        </div>
        <div className='header-center'>
            <p className='header-center-title'>Marriage Expense Management </p>
        </div>
        <div className='header-right'>
            {/* <button 
              className='header-right-signin'
              onClick={() => navigation('/user/signin')}
            >
              SignIn
            </button>
            <button 
              className='header-right-signup'
              onClick={() => navigation('/')}
            >
              SignUp
            </button> */}
            <button 
              className='header-right-signout'
              onClick={() => {
                HandleLogOut();
                window.location.href = "/";
              }}
            >
              SignOut
            </button>
        </div>
    </div>
  )
}
