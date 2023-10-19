import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export async function getAllData() {
    return axios.get(`${BASE_URL}/function/getAllFunction`, {
        headers : {
            "access-token": localStorage.getItem("token"),
        },
    });
}

export async function createNewData() {
    return axios.post(`${BASE_URL}/function/createFunction`, {
        headers : {
            "access-token": localStorage.getItem("token"),
        },
    });
}


export async function updateExist(data,id) {
    console.log(data)
    return axios.put(`${BASE_URL}/function/${id}`,JSON.stringify(data),{
        headers : {
            "access-token": localStorage.getItem("token"),
        },
    }
    );
}