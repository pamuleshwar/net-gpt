import { useSelector } from 'react-redux';
import useNowPlayMovies from '../hooks/useNowPlayMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GPTSearch from './GPTSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  //nowPlayingMovies
  useNowPlayMovies();
  useTrendingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />

      {showGPTSearch ? <GPTSearch /> : <>
        <MainContainer />
        <SecondaryContainer /></>}

      {/* 
          MainContainer
            -VideoBackground
            - VideoTitle & Info
          Secondary Container
            -MoviesList * n
            - Cards * n
      */}

    </div>
  )
}

export default Browse