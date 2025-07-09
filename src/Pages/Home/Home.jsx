import React, { Component, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import placeholderImage from '../../assets/placeholder.png'
import MoviesCard from '../../Components/MovieCard/MovieCard'
import Pagination from '../../Components/Pagination/Pagination'

function Home({addMovieToWatchList , removeMovieFromWatchList , watchList}) {


    return (
        <>
        <Banner/>
        <MoviesCard watchList={watchList} addMovieToWatchList={addMovieToWatchList} removeMovieFromWatchList={removeMovieFromWatchList}/>
     </>
    )

} 

export default Home