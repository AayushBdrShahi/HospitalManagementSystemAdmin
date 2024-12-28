import React, { useContext, useState } from "react";
import upload from "../../assets/upload.svg";
import { AdminContext } from "../../context/AdminContext";
import {toast} from 'react-toastify'
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address, setAddress1] = useState("");

  const {backendUrl,aToken} = useContext(AdminContext)





  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try{
      if(!docImg){
        return toast.error('Must Select an Image')
      }
      const formData =  new FormData()

      formData.append('image',docImg)
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('experience',experience)
      formData.append('fees',Number(fees))
      formData.append('about',about)
      formData.append('speciality',speciality)
      formData.append('degree',degree)
      formData.append('address', JSON.stringify({ city: "KTM", street: "Main Road", zip: "44600" }));

      // console log formdata


      formData.forEach((value,key)=>{
        console.log(`${key} : ${value}`)
      })

      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers:{aToken}})
       
      if(data.success){
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAbout('')
        setFees('')
        setDegree('')
        
      } else{
        toast.error(data.message)
      }


    }catch(error){
      toast.error(error.message)
      console.log(error)

    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full max-w-5xl mx-auto">
      <p className="mb-5 text-2xl font-semibold text-gray-800">Add Doctor</p>

      <div className="bg-white px-6 py-8 border rounded-lg shadow-lg">
        <div className="flex items-center gap-4 mb-8">
          <label htmlFor="doc.img" className="cursor-pointer">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={docImg ? URL.createObjectURL(docImg) : upload}
              alt="Upload"
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc.img"
            hidden
          />
          <p className="text-gray-600 text-sm">Upload Profile Picture</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-800">
          <div>
            <label className="block mb-1 font-medium">Doctor Name</label>
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Doctor Email</label>
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Doctor Password</label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Experience</label>
            <select
              required
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={`${i + 1} Year`}>{`${
                  i + 1
                } Year`}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Fees</label>
            <input
              type="number"
              placeholder="Fees"
              required
              onChange={(e) => setFees(e.target.value)}
              value={fees}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Speciality</label>
            <select
              required
              onChange={(e) => setSpeciality(e.target.value)}
              value={speciality}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="General Physician">General Physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
              <option value="Eye OPD">Eye OPD</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Education</label>
            <input
              type="text"
              placeholder="Education"
              required
              onChange={(e) => setDegree(e.target.value)}
              value={degree}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              type="text"
              placeholder="Address"
              required
              onChange={(e) => setAddress1(e.target.value)}
              value={address}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-1 font-medium">About Doctor</label>
          <textarea
            placeholder="About doctor..."
            rows={5}
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mt-8 text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
