import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useNowPlayMovies = () => {
  //get the now playing movies list and put into the store.
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {

    //get the now-playing movies data
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json?.results));
    
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useNowPlayMovies;