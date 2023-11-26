import React, { useState, useEffect } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function MovieListPageTemplate({ movies, title, action }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const displayedMovies = movies
    .filter((m) => m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1)
    .filter((m) => (genreId > 0 ? m.genre_ids.includes(genreId) : true))
    .slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (type, value) => {
    if (type === "name") {
      setNameFilter(value);
      setCurrentPage(1);
    } else {
      setGenreFilter(value);
      setCurrentPage(1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    window.scrollTo(0, 0);
  };

  return (
    <Grid container sx={{ padding: '20px', textAlign: 'center' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
        <Grid item xs={12}>
          <div>
            <IconButton onClick={handlePrevPage} disabled={currentPage === 1}>
              <ArrowBackIcon />
            </IconButton>
            <span>{`Page ${currentPage}`}</span>
            <IconButton
              onClick={handleNextPage}
              disabled={indexOfLastItem >= movies.length}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;
