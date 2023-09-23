"use strict"
import { useEffect, useState } from 'react'
import './App.css'



const FolloWMouse = () => {
  const  [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // pointer move
  useEffect(()=>{
    console.log('efecto', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if(enabled) window.addEventListener('pointermove', handleMove)
    // cleanup => Cunado el componente se desmonta, cuando cambias n las dependencias, antes de ejcutar el  efecto deseado.

    return () => {
      console.log("cleanup")
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // change body className
  useEffect(()=>{
    document.body.classList.toggle('no-cursor', enabled)  
    // document => no existe en el servidor, por lo que es mala práctica utilzarlo fuera de la función, se deve utilizar en un effect.
    return()=>{
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  // [] => Solo se ejcuta una vez cuando se monta el componente.
  // [enabled] => se ejecuta cuando cambia enabled y cuando se monta el componente.
  // undefined => se ejecuta cada vez que renderiza el componente.

  return(
      <>
      <div style={{
        position: 'absolute',
        backgroundColor: "#646cffaa",
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)} className='btn-toggle'>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
      </>
    )
}

function App() {
  const [mouted, setMouted] = useState(true)
  return (
    <main>
     {mouted && <FolloWMouse />}
     <button onClick={()=> setMouted(!mouted)}>
      Toggle mounted component
      </button>
    </main>
  )
}

export default App
