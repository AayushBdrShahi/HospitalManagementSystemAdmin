import { createContext, useState } from "react";

export const DoctorContext = createContext()

export const DoctorContextProvider =(props)=>{

    // to save the doctor authentication token
    const  backendUrl = import.meta.env.VITE_BACKEND_URL

    const[dToken,setDToken] = useState(localStorage.getItem('dToken')?localStorage.getItem('dToken'):'')

    const value={
        dToken,
        setDToken,
        backendUrl,

    }



    return(
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

