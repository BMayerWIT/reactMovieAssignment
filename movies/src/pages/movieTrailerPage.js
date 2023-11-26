import React from "react";
import { useParams } from "react-router-dom";
import MovieTrailer from "../components/movieTrailer";
import PageTemplate from "../components/templateMovieTrailerPage";
import { getMovieTrailer } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const MovieTrailerPage = () => {
  const { id } = useParams();

  // Fetch the trailer for the movie
  const { data, error, isLoading, isError } = useQuery(
    ["movieTrailer", { id }],
    () => getMovieTrailer(id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !data) {
    return <h1>{error?.message || "Failed to load trailer."}</h1>;
  }

  // Assuming the trailer URL is directly returned from getMovieTrailer
  const trailerUrl = data;
  

  return (
    <PageTemplate trailerUrl={trailerUrl}>

    </PageTemplate>
  );
};

export default MovieTrailerPage;
