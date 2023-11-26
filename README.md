Assignment 1 - ReactJS app.
Name: Brendan Mayer

Overview.
This is a repository with a react app built using the tmbd API to display lists of movies either top rated, popular or upcoming with options on filtering between genres, recommendations based on a particular movie and also the option to play a trailer/video revolving around a particular movie.

## Features.
- Pagination of all listed movie pages with buttons at the bottom of a page to cycle to the next or previous.
- Site header with links to other movie list pages such as Upcoming, Top Rated, Popular and the Home page (Discover Movies) as well as a Favourites page that stores any movies favourited by the user.
- Favourties button on each movie card.
- Explore button on each movie card which links to a page that displays all recommended movies based on the movie you click on.
- Play button which links to a page that displays a trailer/video involving the movie you click on.
- More details button which links to the movie details page and gives an overview of the movie as well as a button to read/submit reviews.


## API endpoints.
+ Discover list of movies = discover/movie
+ Movie details = movie/:id
+ Movie genres = /genre/movie/list
+ Movie trailer / video = movie/:id/videos
+ Recommended movies = movie/:id/recommendations
+ Popular movies = movie/popular
+ Top Rated Movies = movie/top_rated
+ Upcoming movies = movie/upcoming




## Routing.
+ Upcoming movies = /movies/upcoming
+ Top Rated movies = /movies/topRated
+ Popular movies = /movies/popular
+ Movie trailer / video = /movies/:id/trailer
+ Recommended movies = /movies/:id/recommended


## Independent learning.
Material Icons icon search for various icons = https://mui.com/material-ui/material-icons/
Pagination blogs to learn how to display different amounts of elements in an array = https://hygraph.com/blog/react-pagination / https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
Youtube video imbedding in react = https://www.npmjs.com/package/react-youtube / https://stackoverflow.com/questions/6556559/youtube-api-extract-video-id
