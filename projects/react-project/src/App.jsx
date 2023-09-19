import React from 'react'
import './App.css'
import { TwiterFolowCard } from './TwiterFollowCard'

export function App () {
    // const format =  (userName) => `@${userName}`
    const react = {isFollowing: false, userName: 'react', name: "React"}
  return (
/*
  Podremos cambiar react.document.Fragement por <> </>
  Si le pasamos una propiedad sin asignarle nada devolverá true.

  Se pueden pasar como parametros o props funciones que realizen algo en el otro archivo enes ecaso en la twiter Card.

  Tambien se pueden pasar funciones elementos y a arrays.
  Podremos pasarle objetos añadiendoles con el rest operator, de esa manera lo pasa a props, no es muy eficiente yu no es una practica recomendada.
*/
    <section className='App'>
        <TwiterFolowCard
        // formatUserName={format}
        userName="karlosvas"
        name="Carlos Vásquez"
        isFollowing />

        <TwiterFolowCard
        userName="nodejs"
        name="Framework"
        isFollowing />

        <TwiterFolowCard
        userName="mongodb"
        name="Database"
        isFollowing />
        
        <TwiterFolowCard {...react} />
    </section>
  )
}
