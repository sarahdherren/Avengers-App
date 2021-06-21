import React from "react";

// setting up this function so we can display a nested route and use our useRouteMatch hook.
function Movies({ movieList }) {
  
  return (
    <div>
      {movieList.movies.map((movie, i) => <li>{movie}</li>)}
    </div>
  );
}

export default Movies;