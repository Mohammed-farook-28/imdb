import React, { useEffect, useState } from 'react'
import genreConfiguration from '../../Configurations/genreConfiguration';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function WatchList({watchList , removeMovieFromWatchList}) { 
  const [moviesInDisplay , setMoviesInDisplay] = useState([...watchList]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'desc' });
  useEffect(()=>{
    setMoviesInDisplay([...watchList]);
  } , [watchList])
   const genreSet =  new Set();
  console.log(watchList);
   moviesInDisplay.forEach(element => {
    genreSet.add(element.genre_ids[0]);
   });


   function onMovieFilter(e){

    const searchValue  = e.target.value.toLowerCase();
    const  movieToDisplay = watchList.filter((movie)=>{
      return movie.title.toLowerCase().startsWith(searchValue);
    })

    setMoviesInDisplay(movieToDisplay);

   }

   function sorting(e) {
     const sortKey = e.target.innerText;
     let key = null;
     if (sortKey === "Rating") key = "vote_average";
     else if (sortKey === "Popularity") key = "popularity";
     if (!key) return;

     let direction = 'desc';
     if (sortConfig.key === key && sortConfig.direction === 'desc') {
       direction = 'asc';
     }
     setSortConfig({ key, direction });

     let sortedMovies = [...moviesInDisplay];
     sortedMovies.sort((a, b) => {
       if (direction === 'desc') {
         return b[key] - a[key];
       } else {
         return a[key] - b[key];
       }
     });
     setMoviesInDisplay(sortedMovies);
   }

   function chooseGenre(e){
    
      const curGenre = e.target.innerText;
      console.log(curGenre);
      if(curGenre === 'All Genre'){
        setMoviesInDisplay([...watchList]);
      }else{
        let choosedGenre  = [...watchList];
        let filtered = choosedGenre.filter((movie) =>(
           genreConfiguration[movie.genre_ids[0]]===curGenre
        ));

        setMoviesInDisplay(filtered);
    }
   }
   
   const genere = Array.from(genreSet);

   genere.unshift("All Genre");

  return (
    <div>
        <div className='flex justify-center gap-6 flex-wrap'>
      {
        genere.map(genre =>{
          return <button onClick={chooseGenre} className='transition-all hover:scale-110  duration-300 hover:shadow-[0_0_25px_#facc15] hover:border-yellow-400 cursor-pointer rounded-4xl' >{genreConfiguration[genre]}</button>
        })
      }
      </div>

      <div className='mt-[1rem]'>
          <input onChange={onMovieFilter} className="p-5 border text-bold rounded-4xl w-[20rem] h-[4rem]"type='text' placeholder='Search Movies'></input>
      </div>



    <div >
          <div>
        <table className='mt-5 w-full border'>
          <thead>
            <tr>
              <th>Title</th>
              <th className='cursor-pointer' onClick={sorting}>Rating</th>
              <th className='cursor-pointer' onClick={sorting}>Popularity</th>
              <th>Genre</th>

            </tr>
          </thead>
          <tbody>
              {
                moviesInDisplay.map((movie)=>{
                  return <tr className='border my-2 font-bold'>
                    <td className='flex items-center p-5 gap-10'>
                      <img className='bg-cover h-[10rem] w-[20rem] rounded-xl'src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                      <span className='text-yellow-500'>{movie.title}</span>
                    </td>
                    <td>
                      {movie.vote_average}
                    </td>
                    <td>
                      {movie.popularity}
                    </td>
                    <td>
                      {genreConfiguration[movie.genre_ids[0]]}
                    </td>
                    <td  className='items-center pr-3 cursor-pointer'>
                      <FontAwesomeIcon onClick={()=>{removeMovieFromWatchList(movie)}} size='lg' icon={faTrash} style={{ color: '#fa0000' }} /> 
                    </td>
                  </tr>
                })
              }
          </tbody>
        </table>
      </div>
      </div>
    </div>
    
  )
}

export default WatchList