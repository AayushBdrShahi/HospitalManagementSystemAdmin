import React from 'react';
import Login from './pages/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import { DoctorContext } from './context/DoctorContext';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import Doctorlist from './pages/Admin/Doctorlist';
import HealthPackages from './pages/Admin/HealthPackages';

const App = () => {

const {aToken} = useContext(AdminContext)
const{dToken} = useContext(DoctorContext)


  return aToken|| dToken?(
    <div className='bg-[#F8F9FD'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
         <Sidebar/>
         <Routes>
          <Route path ='/' element={<></>}/>
          <Route path ='/admin-dashboard' element={<Dashboard/>}/>
          <Route path ='/all-appointments' element={<AllAppointments/>}/>
          <Route path ='/add-doctor' element={<AddDoctor/>}/>
          <Route path ='/doctor-list' element={<Doctorlist/>}/>
          <Route path ='/health-packages' element={<HealthPackages/>}/>

         </Routes>
      </div>
    </div>
  ):(
    <>
    <Login />
    <ToastContainer/>
    </>
    
  )
};

export default App;
