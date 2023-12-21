import React from 'react'
import Header from './Header';
import usePlayingMovies from '../hooks/usePlayingMovies';
import MainContainer from './MainContainer';
import MoviesListContainer from './MoviesListContainer';

const Browse = () => {
  usePlayingMovies();
  return (
    <>
    <div className="flex justify-between">
    <Header />
    
 
    </div>
    <MainContainer />
    <MoviesListContainer /> 
   
    </>
  )
}

export default Browse;