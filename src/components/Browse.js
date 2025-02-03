import useNowPlayMovies from '../hooks/useNowPlayMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  //nowPlayingMovies
  useNowPlayMovies();
  useTrendingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />

      <MainContainer />

      <SecondaryContainer />

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