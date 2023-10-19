import React, { useEffect, useState } from 'react';
import './Tabels1.css';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getAllData, BASE_URL } from '../../Api/dataAPI';


export default function Books() {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({});

  const FetchAllData = async () => {
    const response = await getAllData();
    // console.log(response);
    setuserData(response.data.data);
    
  };

  useEffect(() => {
    FetchAllData();
  }, []);

  return (
    <div className='books'>
        <div className="tableContainer">
          <TableContainer>
              <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableHeadCell">Name</TableCell>
                      <TableCell className="tableHeadCell">City</TableCell>
                      <TableCell className="tableHeadCell">Amout</TableCell>
                      <TableCell className="tableHeadCell">Gold</TableCell>
                      <TableCell className="tableHeadCell">Category</TableCell>
                      <TableCell className="tableHeadCell">Update</TableCell>
                      <TableCell className="tableHeadCell">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      userData.length > 0 && 
                      userData.map(row => (
                        <TableRow key={row.id}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.city}</TableCell>
                          <TableCell>{row.amount}</TableCell>
                          <TableCell>{row.gold}</TableCell>
                          <TableCell>{row.category}</TableCell>
                          <TableCell>
                            <button 
                              className="tableEditButton"
                              onClick={()=> navigate(`/function/${row._id}`)}
                            >Edit</button>
                          </TableCell>
                          <TableCell>
                              <DeleteOutlineIcon 
                                className="tableDeleteButton"
                                onClick={()=> {
                                  fetch(`${BASE_URL}/function/${row._id}`,{
                                    method: "DELETE",
                                  })
                                  .then(() => alert("Accounts deleted successfully"))
                                  .then(() => FetchAllData())
                                }}
                                />
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
              </Table>
          </TableContainer>
        </div>
    </div>
  )
}