import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

function MoviesCard({addMovieToWatchList , removeMovieFromWatchList , watchList}) {
    const [moviesData , setMoviesData] =  useState(null);
    const [isLoading , setIsLoading] = useState(true);
     const [pageNumber , setPageNumber] =  useState(1);
    function next(){
        setIsLoading(true);
        setPageNumber(pageNumber+1);
    }
    function prev(){
      setIsLoading(true);
        if(pageNumber > 1){
          
            setPageNumber(pageNumber-1);
        }else{
            setPageNumber(1);
        }
    }
    async function getTrendingMovies(){
      try{
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=62843fc74fe19e4e73bd0a920408a4b6&page=${pageNumber}`);
      
        setIsLoading(false);
        setMoviesData(response.data.results);
      }catch(e){
        console.log(e);
      }
       
    }
    useEffect(()=>{
       getTrendingMovies();
       window.scrollTo({ top: 0, behavior: 'smooth' });
    } , [pageNumber])
  return (
    <div>
      <div  className='m-5 font-bold text-2xl'>
          <h2 className='text-center text-yellow-400'>Trending Movies</h2>
      </div>
    <div>
      {(isLoading) ? ( <Skeleton
              height="100%"
              width="100%"
              baseColor="#2a2a2a"
              highlightColor="#3c3c3c"
              style={{ borderRadius: 50}}
            />) :(<div>
                <div className='flex flex-wrap gap-8 justify-center'>
                {
                  moviesData.map((movieObj) =>{
                    return <Card  key={movieObj.id} movieObj={movieObj} addMovieToWatchList={addMovieToWatchList} removeMovieFromWatchList={removeMovieFromWatchList} watchList={watchList}/>
                  })
                }
                </div>
            </div>)}
    </div>
     <Pagination pageNumber={pageNumber}  onNext={next} onPrev={prev} />
    </div>
   
  )
}

export default MoviesCard
