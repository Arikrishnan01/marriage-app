import React, { useState } from 'react';
import './Add.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { createNewData } from '../../Api/dataAPI';
import { CircularProgress } from "@mui/material";

export default function Add() {
  const navigate = useNavigate(); 
  const [name, setName] =useState("");
  const [city, setCity] = useState("");
  const [amount, setAmount] = useState("");
  const [gold, setGold] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const formData = {
        name,
        city,
        amount,
        gold,
        category
      }
      setIsLoading(true);
      const response = await createNewData(formData)
      console.log(response)
      alert("data created successfully....")

      //clear the form after login
      setName("");
      setCity("");
      setAmount("");
      setGold("");
      setCategory("");
      setIsLoading(false);
      //redirect to home page
      navigate("/");
    }
    catch(error){
      setIsLoading(false);
      console.error(error);
      alert("Invalid cradantial please login..")
    }
  }

  return (
    <div className='add-container'>
        <div className='add-container-top'>
            <button 
              className='add-top-btn'
              onClick={() => navigate("/")}
            >
              <span className='add-top-icon'>
                <ArrowBackIcon/>   
              </span>
            Back</button>
          <h3 className="add-top-title">Add New Accounts</h3>
        </div>

        <div className='add-container-content'>
        <form className="addForm">
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>Name</lable>
                  <input 
                      type="text"                                    
                      placeholder="Enter the name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>City</lable>
                  <input 
                      type="text" 
                      placeholder="Enter the city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                  />
              </div>
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>Amount</lable>
                  <input 
                      type="text" 
                      placeholder="Enter the amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                  />
              </div>
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>Gold</lable>
                  <input 
                      type="text" 
                      placeholder="Enter the gold"
                      value={gold}
                      onChange={(e) => setGold(e.target.value)}
                  />
              </div>
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>Category</lable>
                  <input 
                      type="text" 
                      placeholder="Enter the Category chain or ring ..."
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                  />
              </div>
          </form>
          <button 
            className='addFacultyButtonBottom'
            onClick={handleSubmit}  
          >
            {isLoading ? <CircularProgress size={24} color="inherit" />
             : "Create New"}
          </button>
        </div>
    </div>
  )
}
