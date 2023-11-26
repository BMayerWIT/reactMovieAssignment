import React from "react";

import { useQuery } from 'react-query';
import { getRecommendedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useParams } from "react-router-dom";




const RecommendedMoviesPage = (props) => {
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery(
      ["recommended", { id }],
      () => getRecommendedMovies(id)
   );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const recommendedMovies = data.results;

//   const favorites = recommendedMovies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))
//   const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Recommended Movies"
      movies={recommendedMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default RecommendedMoviesPage;