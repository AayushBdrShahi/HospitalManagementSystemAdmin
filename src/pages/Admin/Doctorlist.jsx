import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const Doctorlist = () => {

  const {doctors,aToken, getAllDoctors,changeAvailability} = useContext(AdminContext)

  useEffect(()=>{
  if(aToken){
    getAllDoctors()
  }
  },[aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-5 gap-y-10 px-6'>
  {doctors.map((item, index) => (
    <div
      className='border border-indigo-100 rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-shadow duration-300'
      key={index}
    >
      <img
        className='bg-indigo-50 group-hover:bg-blue-50 transition-all duration-500 w-full h-45 object-cover'
        src={item.image}
        alt={item.name}
      />

      <div className='p-6'>
        <p className='text-neutral-800 text-xl font-medium mb-2'>{item.name}</p>
        <p className='text-zinc-600 text-base mb-4'>{item.speciality}</p>

        <div className='flex items-center gap-2'>
          <input onChange={()=> changeAvailability(item._id)}
            type="checkbox"
            checked={item.available}
            readOnly
            className='w-5 h-5'
          />
          <p className='text-base'>Available</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Doctorlist
