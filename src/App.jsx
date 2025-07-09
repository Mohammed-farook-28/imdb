import { useState } from 'react'
import './App.css'
import { Routes , Route}  from 'react-router-dom';
import WatchList from './pages/WatchList/WatchList';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/NavBar';

function App() {
  const  [watchList , setWatchList]  =  useState([]);
  function addMovieToWatchList(movie){
    setWatchList([...watchList , movie]);
  }
  function removeMovieFromWatchList(movieObj){
    const updatedWatchList = watchList.filter((movie) => movie.id != movieObj.id);
    setWatchList(updatedWatchList);
  }
  return (  
    <>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home watchList={watchList} addMovieToWatchList={addMovieToWatchList} removeMovieFromWatchList={removeMovieFromWatchList} />}></Route>
        <Route path='/watchlist' element={<WatchList watchList={watchList}   removeMovieFromWatchList={removeMovieFromWatchList}/>}></Route>
       </Routes>
    </>
  )
}

export default App
