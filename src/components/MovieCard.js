import React from 'react'
import { TMDB_IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({title,posterPath}) => {
  return (
    <div className='w-48 pr-8'>
        <img className='cursor-pointer rounded-md' src={TMDB_IMG_CDN_URL + posterPath} alt={title} />
    </div>
  )
}

export default MovieCard