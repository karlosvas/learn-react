import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from './movies'

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)
    const previusSearch = useRef(search)

    // useMemo
    /*
    const getMovies = useMemo(() => {
        return async ({ search }) => {
    */

    // useCalback: es lo mismo que el useMemo pero pensado para función. Simplifica la sintaxis.
    const getMovies = useCallback(async ({ search }) => {
        // Verifica si search esta vacio.
        if (search == previusSearch.current) return

        try {
            setLoading(true)
            setError(null)
            previusSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])

    // const sortMovies = sort
    //     ? [...movies].sort((a, b) => b.year.localeCompare(a.year))
    //     : movies

    const sortMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => b.year.localeCompare(a.year))
            : movies
    }, [sort, movies])


    return { movies: sortMovies, getMovies, loading }
}