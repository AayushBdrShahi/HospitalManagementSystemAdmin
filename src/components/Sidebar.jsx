import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import homeicon from '../assets/home_icon.svg'
import appointmenticon from '../assets/appointment_icon.svg'
import Doctoricon from '../assets/Doctoriicon.svg'
import listicon from '../assets/list_icon.svg'



const Sidebar = () => {

    const {aToken} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-r '>
        {
            aToken && <ul className='text-[#515151] mt-5'>

<NavLink
  to="/admin-dashboard"
  className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
    }`
  }
>
  <img src={homeicon} alt="Dashboard" />
  <p>Dashboard</p>
</NavLink>

<NavLink
  to="/all-appointments"
  className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
    }`
  }
>
  <img src={appointmenticon} alt="Appointments" />
  <p>Appointments</p>
</NavLink>

<NavLink
  to="/add-doctor"
  className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
    }`
  }
>
  <img src={Doctoricon} alt="Add Doctor" />
  <p>Add Doctor</p>
</NavLink>

<NavLink
  to="/doctor-list"
  className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
    }`
  }
>
  <img src={Doctoricon} alt="Doctor List" />
  <p>Doctor List</p>
</NavLink>

<NavLink
  to="/health-packages"
  className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
    }`
  }
>
  <img src={listicon} alt="Health Packages" style={{ filter: 'brightness(0)' }} />
  <p>Health Packages</p>
</NavLink>

            </ul>
        }
    </div>
  )
}

export default Sidebar
