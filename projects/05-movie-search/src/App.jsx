import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h2>Buscador de peliculas</h2>
        <form className='form'>
          <input placeholder='Movie' />
          <button type="submit">Buscar</button>
        </form>
        <h1>Prueba Tecnica</h1>
      </header>

      <main>
        <Movies movies={ movies }/>
      </main>
    </div>
  )
}

export default App
