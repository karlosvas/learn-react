import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from "./components/Movies"
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch () {
  const [ search, updateSearch ] = useState('')
  const [ error, setError ] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() =>{
    if(isFirstInput.current) {
      isFirstInput.current = search == ""
      return
    }

    if (search == ""){
      setError("No se puede buscar una pelicula vacia")
      return
    }
    
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un número")
      return
    }
    
    if (search.length < 3) {
      setError("No se puede buscar una pelicula con menos de 3 caracteres")
      return
    }
    
    setError(null)
  }, [search])
  return { search, updateSearch, error }
}
  //   setQuery(event.target.value)
  //   if (newQuery == ""){
  //     setError("No se puede buscar una pelicula vacia")
  //     return
  //   }

  //   if (newQuery.match(/^\d+$/)) {
  //     setError("No se puede buscar una pelicula con un número")
  //     return
  //   }

  //   if (newQuery.length < 3) {
  //     setError("No se puede buscar una pelicula con un número")
  //     return
  //   }

  //   setError(null)
// }

function App() {
  const [ sort, setSort ] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort }) 

  const debouceGetMovies = useCallback(
    debounce(search => {
    getMovies({ search })
  },300)
  ,[getMovies]
)

const handleSumbit = (event) =>{
  event.preventDefault()
  // const { query } = new Object.formEntires(
  //   new window.FormData(event.target)
  // )
  getMovies({ search })
  } 

  const handleSort = () => {
    setSort(!sort)
  }
    
  const handleChange = (event) =>  {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouceGetMovies(newSearch)
  }

  return (
    <div className='page'>
      
      <header>
        <h2>Buscador de peliculas</h2>
        <form className='form' onSubmit={ handleSumbit }>
          <input 
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'tranparent'
          }} onChange={ handleChange } value={search} name="query" placeholder='Movie' 
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red"}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p>: <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
