import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../../store/watchListSlice';

function Card({movieObj}) {
    const dispatch = useDispatch();
    const watchList = useSelector((state) => state.watchList.watchList);
    
    const bannerImage = `https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`;
    const isMovieInWatchList = watchList.find((movie) => movie.id === movieObj.id);

    const handleAddToWatchList = () => {
        dispatch(addMovie(movieObj));
    };

    const handleRemoveFromWatchList = () => {
        dispatch(removeMovie(movieObj.id));
    };

    return (
        <div className='h-[400px] w-[280px] border bg-cover bg-center flex items-end transition-all hover:scale-110  duration-300 hover:shadow-[0_0_25px_#facc15] hover:border-yellow-400 cursor-pointer rounded-4xl relative' style={{backgroundImage:`url(${bannerImage})`}} >

        {
          (!isMovieInWatchList) ? <div onClick={handleAddToWatchList} className='absolute top-0 right-2 text-4xl p-2 '>
                &#x2661;
            </div>: <div onClick={handleRemoveFromWatchList} className='absolute top-0  right-2 text-4xl p-2 '>
               &#10084;
            </div>
        }
           
            <div className='font-bold text-yellow-400 m-5 text-xl '>{movieObj.title}</div>

        </div>
    )
}

export default Card