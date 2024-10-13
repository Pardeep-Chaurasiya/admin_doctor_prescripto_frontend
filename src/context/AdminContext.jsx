import { createContext, useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"

export const AdminContext = createContext()

const AdminContextProvider = (props) =>{

    const  [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'')
    const [doctors,setDoctors] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async()=>{
        try{
            const data = await axios.get(`${backendUrl}/api/admin/all-doctors`, {
                headers: { token }
            });
            if(data.data.success){
                console.log(data.data.doctors)
                setDoctors(data.data.doctors)
            }else{
                toast.error(data.message)
            }
        }
        catch(err){
            toast.error(err.message)
    }
    }


    const value={
        token,setToken,
        backendUrl,doctors,getAllDoctors
    }

    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider