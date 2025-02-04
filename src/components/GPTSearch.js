import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMoviesSuggestions from './GPTMoviesSuggestions';
import { BACKGROUND_IMAGE } from '../utils/constant';

const GPTSearch = () => {
  return (
    <div className=''>
        <div className='absolute -z-10'>
                    <img src={BACKGROUND_IMAGE} alt='background-image' />
                </div>
        <GPTSearchBar />
        <GPTMoviesSuggestions />
    </div>
  )
}

export default GPTSearch;