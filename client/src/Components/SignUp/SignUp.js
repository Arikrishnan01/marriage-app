import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../../Api/AuthAPI';
import { CircularProgress } from "@mui/material";

export default function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const formData = {
        userName,
        email,
        password
      }
      setIsloading(true);
      await userSignUp(formData);
      
      // After signup the form it will be empty..
      setUserName("");
      setEmail("");
      setPassword("");
      setIsloading(false);
      // after signup it will redirect to signinPage...
      navigate('/user/signin');
    }
    catch(error){
      setIsloading(false);
      console.error(error);
      alert("Registration failed!! , give the valid value....");
    }
  }
  const isFormValid =
    userName &&
    email &&
    password 

  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" >
        <div className="newUserItem">
            <label>Username</label>
            <input 
                type="text" 
                placeholder='Jhon' 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input 
                type="email" 
                placeholder='jhon@gmail.com' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="newUserItem">
            <label>PassWord</label>
            <input 
                type="password" 
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
      
          <button className="newUserButton"
                  onClick={handleSubmit}
                  disabled={!isFormValid || isLoading}>
              {isLoading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Signup"
                  )}
          </button>
      </form>
      <div className='newUserBottom'>
        <strong className='newUserBottom-span'>
          Already have a account? 
          <button 
            className='newUserBottom-btn'
            onClick={() => navigate("/user/signin")}
          >signIn</button>
        </strong>
      </div>
    </div>
  )
}
