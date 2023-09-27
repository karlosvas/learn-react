function ListOfMovies ({ movies }) {
    return(
        <ul>
              {
                movies.map(movie => (
                  <li  key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <img src={movie.poster} alt={movie.title} />
                  </li>
                ))
              }
            </ul>
    )
}

function noMoviesResult () {
    return(
        <p>No se encontraron peliculas para esta búsqueda</p>
    )
}

export function Movies({ movies }){
    const hasMovie = movies?.length > 0

    return(
        hasMovie
        ? <ListOfMovies movies={movies} />
        : <noMoviesResult />
    )

}