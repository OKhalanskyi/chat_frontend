import axios, {Axios, AxiosRequestConfig} from "axios";
import {CreateUserParams, LoginUserParams, User} from "./types";

const API_URL = process.env.REACT_APP_API_URL
const config:AxiosRequestConfig = {withCredentials:true}

export const postRegisterUser = (data:CreateUserParams)=>{
    axios.post(`${API_URL}/auth/register`, data, config)
}

export const postLoginUser = (data:LoginUserParams)=>{
    console.log(data)
    const login = axios.post(`${API_URL}/auth/login`,data,config)
    login.then(getAuthUser)
    return login
}

export const getAuthUser = ()=>
    axios.get<User>(`${API_URL}/auth/status`,config)

export const getConversations =()=>
    axios.get(`${API_URL}/conversations`, config)
