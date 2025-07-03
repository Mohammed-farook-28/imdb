import { useState } from 'react'
import './App.css'
import { Routes , Route}  from 'react-router-dom';
import WatchList from './pages/WatchList/WatchList';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watchlist' element={<WatchList />}></Route>
       </Routes>
    </>
  )
}

export default App
