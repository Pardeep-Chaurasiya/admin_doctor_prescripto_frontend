import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from "react-router-dom"
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {

    const {token,setToken} = useContext(AdminContext)
    const navigate = useNavigate()

    const logout = () =>{
        navigate('/')
        token && setToken('')
        token && localStorage.removeItem('token')
    }


  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'> 
        <div className='flex justify-center gap-2 text-xs'>
            <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="admin logo" />
            <p className='border px-2.5 py-2 rounded-full border-gray-500 text-gray-600'>{token?'Admin':'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar