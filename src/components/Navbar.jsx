import React from 'react'
import logo1 from './logo1.svg';


const Navbar = () => {
    return (
        <nav className='bg-violet-700 text-white p-2 add  text-xs md:text-xl'>
            <div className="main flex justify-between ">
                <img className='w-25 md:w-40'  src={logo1} alt="" />
                <div className="text flex items-center gap-4">
                    <div className="first  font-sans cursor-pointer hover:font-bold ">Home</div>
                    <div className="second   font-sans cursor-pointer hover:font-bold ">Your Tasks</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
