import React from 'react';
import Login from './pages/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import { DoctorContext } from './context/DoctorContext';

const App = () => {

const {aToken} = useContext(AdminContext)
const{dToken} = useContext(DoctorContext)


  return aToken|| dToken?(
    <div>
      <ToastContainer/>
    </div>
  ):(
    <>
    <Login />
    <ToastContainer/>
    </>
    
  )
};

export default App;
