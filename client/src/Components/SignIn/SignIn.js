import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { userSignIn } from '../../Api/AuthAPI';
import { CircularProgress } from "@mui/material";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const formData = {
        email,
        password
      }
      setIsLoading(true);
      const response = await userSignIn(formData)
      console.log(response)
      localStorage.setItem("token", response.data.token);
      //clear the form after login
      setEmail("");
      setPassword("");
      setIsLoading(false);
      //redirect to home page
      navigate("/home-page");
    }
    catch(error){
      setIsLoading(false);
      console.error(error);
      alert("SignIn is failed, please give the valid value...")
    }
  }
  
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">Exist User</h1>
      <form className="newUserForm" >
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
        <button 
          className="newUserButton"
          onClick={handleSubmit}
        >
            {isLoading ? <CircularProgress size={24} color="inherit" />
             : "SignIn"}
        </button>
      </form>
      <div className='newUserBottom'>
        <strong className='newUserBottom-span'>
          Don't have a account? 
          <button 
            type='submit'
            className='newUserBottom-btn'
            onClick={() => navigate("/")}
          >signUp</button>
        </strong>
      </div>
    </div>
  )
}
