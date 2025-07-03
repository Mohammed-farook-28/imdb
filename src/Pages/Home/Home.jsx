import React, { Component, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import placeholderImage from '../../assets/placeholder.png'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function Home() {
    const [bannerImage , setBannerImage] =  useState(placeholderImage);
    const[movieName , setMovieName] = useState("");
    const [loading, setLoading] = useState(true);

    return (
        <div className='h-[60vh]'>
        {loading ? ( <Skeleton
        height="100%"
        width="100%"
        baseColor="#2a2a2a"
        highlightColor="#3c3c3c"
        style={{ borderRadius: 50}}
      />) : (
            <div>
                {movieName}
            </div>
        )}
          
      </div>
    )

}

export default Home