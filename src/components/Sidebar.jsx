import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const {token} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-1'>
        {
            token && <ul className='text-[#515151] mt-5'>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:minw-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`}  to={"/admin-dashboard"}>

                    <img src={assets.home_icon} alt="home icon" />
                    <p>Dashboard</p>
                </NavLink>
                <NavLink  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:minw-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`}  to={"/all-appointment"}>
                    <img src={assets.appointment_icon} alt="appointment icon" />
                    <p>Appointments</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:minw-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`}  to={"add-doctor"}>
                    <img src={assets.add_icon} alt="add icon" />
                    <p>Add Doctor</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:minw-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`}  to={"/doctor-list"}>
                    <img src={assets.people_icon} alt="people icon" />
                    <p>Doctor List</p>
                </NavLink>
            </ul>
        }
    </div>
  )
}

export default Sidebar