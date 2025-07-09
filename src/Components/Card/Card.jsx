import React from 'react'

function Card({movieObj , addMovieToWatchList , removeMovieFromWatchList ,  watchList}) {
    const bannerImage = `https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`;
    const isMovieInWatchList =  watchList.find((movie) => movie.id === movieObj.id)
  return (
    <div className='h-[400px] w-[280px] border bg-cover bg-center flex items-end transition-all hover:scale-110  duration-300 hover:shadow-[0_0_25px_#facc15] hover:border-yellow-400 cursor-pointer rounded-4xl relative' style={{backgroundImage:`url(${bannerImage})`}} >

    {
      (!isMovieInWatchList) ? <div onClick={()=>{addMovieToWatchList(movieObj)}} className='absolute top-0 right-2 text-4xl p-2 '>
            &#x2661;
        </div>: <div onClick={()=>{removeMovieFromWatchList(movieObj)}} className='absolute top-0  right-2 text-4xl p-2 '>
           &#10084;
        </div>
    }
       
        
        <div className='font-bold text-yellow-400 m-5 text-xl '>{movieObj.title}</div>

    </div>
  )
}

export default Card