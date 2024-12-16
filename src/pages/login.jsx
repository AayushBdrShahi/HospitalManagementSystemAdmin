 import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from 'axios'
import {toast} from 'react-toastify'
import { DoctorContext } from "../context/DoctorContext";

const Login = () => {

const [state, setState] = useState("Admin"); 
const[email,setEmail]= useState("");
const[password,setPassword] = useState("")
const{setAToken,backendUrl} = useContext(AdminContext)
const{setDToken}=  useContext(DoctorContext)

const onSubmitHandler = async(event)=>{
  event.preventDefault()

  try{

    if(state ==='Admin'){
      const{data} = await axios.post(backendUrl +'/api/admin/login',{email,password})
       if(data.success){
        localStorage.setItem('aToken',data.token)
        setAToken(data.token)
        toast.success(data.message || "Login Successful");

       }else{
        toast.error(data.message || "Invalid credentials");
      }
    }else{
      const{data} = await axios.post(backendUrl+'/api/doctor/login',{email,password})
      if(data.success){
        localStorage.setItem('dToken',data.token)
        setDToken(data.token)
        console.log(data.token)
        toast.success(data.message || "Login Successful");

       }else{
        toast.error(data.message || "Invalid credentials");
      }
      
    }

  }catch(error){

  }

}


  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-black text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto ">
          <span className="text-primary">{state}</span> Login
        </p>
        
        <div className="w-full">
          <p>Email</p>
          <input onChange={(e)=> setEmail(e.target.value)} value={email}
            className="border rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input onChange={(e)=> setPassword(e.target.value)} value={password}
            className="border rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        {/* Dropdown for Role Selection */}
        <div className="w-full">
          <p>Login as:</p>
          <select
            className="border rounded w-full p-2.5 mt-1"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>
        <button
         
          className="bg-blue-500 text-white w-full py-2 rounded-md text-base"
        >
          Login
        </button>
        {/* Either this or dropdown */}
        {/* {
          state ==='Admin'
          ? <p>Doctor Login? <span className="cursor-pointer" onClick={()=> setState('Doctor')}>Click here</span></p>
          :<p>Admin Login ?<span className="cursor-pointer"  onClick={() => setState('Admin')}>Click here</span></p>
        } */}
      </div>
    </form>
  );
};

export default Login;
