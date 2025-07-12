import './App.css'
import { Routes , Route}  from 'react-router-dom';
import WatchList from './pages/WatchList/WatchList';
import Home from './pages/Home/Home';
import Navbar from '../src/Components/Navbar/Navbar'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  return (
    <div className="app-container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watchlist' element={<WatchList />}></Route>
      </Routes>
    </div>
  )
}

export default App
