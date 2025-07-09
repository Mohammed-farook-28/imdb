import React, { Component, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import {getRandomValue} from '../../utils';
function Banner() {
      const [bannerImage , setBannerImage] =  useState();
    const[movieName , setMovieName] = useState("Loading...");
    const [loading, setLoading] = useState(true);

    async function  fetchMovieData(){
      try{
        const res  = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=62843fc74fe19e4e73bd0a920408a4b6');
        const data = await res.data;
        const movies = data.results;
        const curMovieIndex = getRandomValue(0 , movies.length-1);
        const movie  =  movies[curMovieIndex];
        const bannerImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
        const movieName = movie.title;
        setBannerImage(bannerImage);
        setMovieName(movieName);
        setLoading(false);
      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      fetchMovieData();
    }, 300);

  return (
       <div className='bannerClass h-[60vh] transition-all duration-300 hover:shadow-[0_0_25px_#facc15] hover:border-yellow-400 cursor-pointer rounded-4xl'>
        {loading ? ( <Skeleton
        height="100%"
        width="100%"
        baseColor="#2a2a2a"
        highlightColor="#3c3c3c"
        style={{ borderRadius: 50}}
      />) : (
        <div>
            <div className='h-[60vh]  border bg-cover flex items-end rounded-4xl'  style={{backgroundImage:`url(${bannerImage})`} }>
              <div className='pl-6 pb-6 text-3xl text-white font-extrabold text-yellow-400'>
                {movieName}
            </div>
            </div>
            
            </div>
        )}
          
      </div>
  )
}

export default Banner