import React, { useState } from 'react'

function Pagination({pageNumber , onNext , onPrev}) {
   
  return (
    <div className='flex   gap-20 justify-center h-[50px] items-center font-3xl font-bold mt-10'>
    <div className='cursor-pointer text-yellow-400 font-bold transition-all hover:scale-110  duration-300 hover:shadow-[0_0_25px_#facc15] hover:border-yellow-400 cursor-pointer rounded-4xl'><button onClick={onPrev}>{'<<'}</button></div>
    <div>{pageNumber}</div>
    <div className='cursor-pointer text-yellow-400 font-bold transition-all hover:scale-110  duration-300 hover:shadow-[0_0_25px_#facc15] hover:border-yellow-400 cursor-pointer rounded-4xl'><button onClick={onNext}>{'>>'}</button></div>
    </div>
  )
}

export default Pagination   