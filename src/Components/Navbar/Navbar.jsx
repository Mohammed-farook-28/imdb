import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/movie-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/themeSlice'

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === 'dark';

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className='navbar-container flex space-x-10 pl-3 py-3 items-center'>
        
        <Link to={"/"}>
            <img src={logo} className='w-[80px] h-[80px] bg-yellow-400 rounded-full ' alt="Logo" />
        </Link>

        <Link to={"/"} className='nav-link text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors'>
            Movies
        </Link>

        <Link to={"/watchlist"} className='nav-link text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors'>
            WatchList
        </Link>

        <button
          onClick={handleToggleTheme}
          className='theme-toggle-btn w-12 h-12 rounded-full relative bg-yellow-400 hover:bg-yellow-500 flex justify-center items-center ml-auto mr-4 text-xl transition-all duration-300 transform hover:scale-110'
        >
          {isDark ? (
            <FontAwesomeIcon
              size='lg'
              icon={faSun}
              style={{ color: '#1f2937' }}
              className="transition-transform duration-300"
            />
          ) : (
            <FontAwesomeIcon
              size='lg'
              icon={faMoon}
              style={{ color: '#1f2937' }}
              className="transition-transform duration-300"
            />
          )}
        </button>

    </div>
  )
}

export default Navbar