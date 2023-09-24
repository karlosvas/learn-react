import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  /*
  // const [factError, setFactError] = useState()

  Async await
  useEffect(() => {
    async function getRandomFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      steFact(json.fact)
    }
    getRandomFact()
  }, []) //  [] => Dependencias

  Promesas par arecuperar la cita al cargar al página

  useEffect(() => getRandomFact(setFact), [])

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        // Mira si hay algun error con la respuesta.
        // if (!res.ok) setFactError('No se ha podido recuperar la cita')
        // if (!res.ok) throw new Error('No se ha podido recuperar la cita')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        steFact(fact)
      })
      // .catch((err) => {
      //   console.log(err)
    // Mostrara si hay algun  errror tanto en la peticion como en la rerspuesta.
      // })
  }, []) //  [] => Dependencias

  // No utilizar fecth sin useEffect.
*/

  // Para recuperar la imagen cada vez que tengamos una cita nueva.
  const handleClick = async () => {
    // const newFact = await getRandomFact()
    // setFact(newFact)
    refreshFact()
  }

  return (
    <main>
      <h2>App de gatos</h2>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first trhee words word for ${fact}`} />}
    </main>
  )
}
