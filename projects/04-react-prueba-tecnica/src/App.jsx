import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export function App () {
  const [fact, steFact] = useState()
  const [imageUrl, setImgURL] = useState()
  // const [factError, setFactError] = useState()
  /*
  Async await
  useEffect(() => {
    async function getRandomFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      steFact(json.fact)
    }
    getRandomFact()
  }, []) //  [] => Dependencias
*/

  // Promesas par arecuperar la cita al cargar al página
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

  // No utilizar fecth sin useEffect
  // para recuperar la imagen cada vez que tengamos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threeFistWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFistWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImgURL(url)
      })
  }, [fact])

  return (
    <main>
      <h2>App de gatos</h2>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMG_URL}${imageUrl}`} alt={`Image extracted using the first trhee words word for ${fact}`} />}
    </main>
  )
}
