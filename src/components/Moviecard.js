import React from 'react'
import { IMG_CDN } from '../utils/constants'

const Moviecard = ({posterPath}) => {
  return (
    <div className="">
    
    <img alt="movie_img" src={IMG_CDN + posterPath} className='aspect-auto max-w-max px-2 h-44 my-2 hover:h-52 hover:w-52 hover:border-opacity-100' />
              
    
    </div>
 
  )
}

export default Moviecard