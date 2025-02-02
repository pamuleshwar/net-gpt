import useNowPlayMovies from '../hooks/useNowPlayMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  //nowPlayingMovies
  useNowPlayMovies();

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