import React from 'react'
import { FaUserPlus } from "react-icons/fa";

const Navbar = ({handleClickShowModal}) => {

    return (
        <nav className='grid place-content-center gap-3 p-4'>
            
            <h1 className='text-4xl font-black text-[#fff] text-center md:text-5xl'>
                Users CRUD
            </h1>
            <button className="flex justify-center items-center gap-2 bg-background-colorPrimary border-none text-[#fff] p-[10px] rounded-lg shadow-md shadow-background-backgroundColor/50 text-[18px] font-semibold cursor-pointer hover:bg-[#3432c4] hover:text-[#fff] transition hover:scale-110 ease-in duration-200" onClick={handleClickShowModal}><FaUserPlus/> Create New User</button>
            
        </nav>
    )
}

export default Navbar