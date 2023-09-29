import whitoutResult from "../mocks/whit-no-result.json"
import { useState } from 'react'

export function useMovies({ search }) {
    const [responseMovies, setResponseMovies] = useState([])
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const getMovies = () => {
        if (search) {
            // setResponseMovies(whithResult)
            fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f7ecf57d&s=${search}`)
                .then(res => res.json())
                .then(json => {
                    setResponseMovies(json)
                })
        } else {
            setResponseMovies(whitoutResult)
        }
    }
    return { movies: mappedMovies, getMovies }
}