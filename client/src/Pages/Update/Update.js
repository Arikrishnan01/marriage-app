import React, { useEffect, useState } from 'react';
import './Update.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../Api/dataAPI';
import { CircularProgress } from "@mui/material";

let initialObject = {
  name: "" ,
  city: "" ,
  amount: "" ,
  gold: "" ,
  category: "" 
}

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [isLoading, setIsLoading] = useState(false);
  const [formState, setForm] = useState(initialObject);

  const inputHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(formState)
    setForm({...formState, [name]: value})
  }

  //getbyId for update
  const getById = () =>{
    fetch(`${BASE_URL}/function/${id}`, {
      method: "GET",
    })
    .then((data) => data.json())
    .then((byId) => {
      console.log(byId.data);
      setForm(byId.data);
    })
  }

  useEffect(() => {
    getById()
  }, []);

  //update the existing data
  const updateExistData = async(e) => {
    e.preventDefault();
    const updateById = {
      name: formState.name,
      city: formState.city,
      amount: formState.amount,
      gold: formState.gold,
      category: formState.category,
    };
    console.log(formState)
    fetch(`${BASE_URL}/function/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateById),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response data in your front-end code
      })
      .catch((error) => {
        console.error("Error:", error);
    })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
    navigate("/")
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
          <h3 className="add-top-title">Update Existing Accounts</h3>
        </div>

        <div className='add-container-content'>
        <form className="addForm">
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>Name</lable>
                  <input
                      name="name" 
                      type="text"                                    
                      placeholder="Enter the name"
                      value={formState.name}
                      onChange={e => inputHandler(e)}
                  />
              </div>
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>City</lable>
                  <input 
                      name="city"
                      type="text" 
                      placeholder="Enter the city"
                      value={formState.city}
                      onChange={e => setForm(e)}
                  />
              </div>
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>Amount</lable>
                  <input 
                      name="amount"
                      type="text" 
                      placeholder="Enter the amount"
                      value={formState.amount}
                      onChange={e => setForm(e)}
                  />
              </div>
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>Gold</lable>
                  <input 
                      name="gold"
                      type="text" 
                      placeholder="Enter the gold"
                      value={formState.gold}
                      onChange={e => setForm(e)}
                  />
              </div>
              <div className="addfacultyItems">
                  <lable className='addfacultyItems-label'>Category</lable>
                  <input 
                      name="category"
                      type="text" 
                      placeholder="Enter the Category chain or ring ..."
                      value={formState.category}
                      onChange={e => setForm(e)}
                  />
              </div>
          </form>
          <button 
            className='addFacultyButtonBottom'
            onClick={updateExistData}  
          >
            {isLoading ? <CircularProgress size={24} color="inherit" />
             : "Update"}
          </button>
        </div>
    </div>
  )
}
