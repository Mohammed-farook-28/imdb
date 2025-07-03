import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/movie-logo.png"
function Navbar() {
  return (
    <div className='flex space-x-10 pl-3 py-3 items-center'>
        
        <Link to={"/"}>
            <img src={logo} className='w-[80px] h-[80px] bg-yellow-400 rounded-full '></img>
        </Link>

        <Link to={"/"} className='text-2xl font-bold text-yellow-400'>
            Movies
        </Link>

        <Link to={"/watchlist"} className='text-2xl font-bold text-yellow-400'>
            WatchList
        </Link>
    </div>
  )
}

export default Navbar