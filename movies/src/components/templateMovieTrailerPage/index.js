import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import MovieTrailer from "../movieTrailer";


const TemplateMovieTrailerPage = ({trailerUrl}) => {
    
    

      return (
        <>
         
    
          <Grid container spacing={5} sx={{ padding: "15px" }}>
            <Grid item xs={3}>
              {/* Video player component */}
              <MovieTrailer videoUrl={trailerUrl} />
            </Grid>
    
          </Grid>
        </>
      );
    };

export default TemplateMovieTrailerPage;