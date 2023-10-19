import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export async function userSignUp(data){
    return axios.post(`${BASE_URL}/user/signup`, data)
}

export async function userSignIn(data){
    return axios.post(`${BASE_URL}/user/signin`, data)
}

export const HandleLogOut = () => {
    localStorage.removeItem('token')
    return;
};
