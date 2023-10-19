import React, { useEffect, useState } from 'react';
import './Update.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../Api/dataAPI';
import { CircularProgress } from "@mui/material";

let initialObject = {
  name: "",
  city: "",
  amount: "",
  gold: "",
  category: ""
};

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formState, setForm] = useState(initialObject);
  const [isLoading, setIsLoading] = useState(false);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...formState, [name]: value });
  };

  //getById for update
  const getById = () => {
    fetch(`${BASE_URL}/function/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((byId) => {
        // console.log(byId.data);
        setForm(byId.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    getById();
  }, []);

  //update the existing data
  const updateExistData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updateById = {
      name: formState.name,
      city: formState.city,
      amount: formState.amount,
      gold: formState.gold,
      category: formState.category,
    };

    fetch(`${BASE_URL}/function/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateById),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        // Handle the response data in your front-end code
        navigate("/home-page");
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
        // Handle errors here
      });
  }

  return (
    <div className='add-container'>
      <div className='add-container-top'>
        <button
          className='add-top-btn'
          onClick={() => navigate("/home-page")}
        >
          <span className='add-top-icon'>
            <ArrowBackIcon />
          </span>
          Back
        </button>
        <h3 className="add-top-title">Update Existing Accounts</h3>
      </div>

      <div className='add-container-content'>
        <form className="addForm">
          <div className="addfacultyItems">
            <label className='addfacultyItems-label'>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter the name"
              value={formState.name}
              onChange={inputHandler}
            />
          </div>
          <div className="addfacultyItems">
            <label className='addfacultyItems-label'>City</label>
            <input
              name="city"
              type="text"
              placeholder="Enter the city"
              value={formState.city}
              onChange={inputHandler}
            />
          </div>
          <div className="addfacultyItems">
            <label className='addfacultyItems-label'>Amount</label>
            <input
              name="amount"
              type="text"
              placeholder="Enter the amount"
              value={formState.amount}
              onChange={inputHandler}
            />
          </div>
          <div className="addfacultyItems">
            <label className='addfacultyItems-label'>Gold</label>
            <input
              name="gold"
              type="text"
              placeholder="Enter the gold"
              value={formState.gold}
              onChange={inputHandler}
            />
          </div>
          <div className="addfacultyItems">
            <label className='addfacultyItems-label'>Category</label>
            <input
              name="category"
              type="text"
              placeholder="Enter the Category chain or ring ..."
              value={formState.category}
              onChange={inputHandler}
            />
          </div>
        </form>
        <button
          className='addFacultyButtonBottom'
          onClick={updateExistData}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Update"}
        </button>
      </div>
    </div>
  )
}