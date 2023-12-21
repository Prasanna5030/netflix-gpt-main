import React from 'react'
import Header from './Header';
import usePlayingMovies from '../hooks/usePlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
    <div className="flex justify-between">
    <Header />
    
 
    </div>
    <MainContainer />
    <SecondaryContainer />
   
    </>
  )
}

export default Browse;