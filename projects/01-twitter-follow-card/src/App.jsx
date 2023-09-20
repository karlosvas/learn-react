import React, { useState } from 'react'
import './App.css'
import { TwiterFolowCard } from './TwiterFollowCard'

export function App () {
    // const format =  (userName) => `@${userName}`
    const react = {isFollowing: false, userName: 'react', name: "React"}
    const [name, setName] = useState('karlosvas')
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
        userName={name}
        name="Carlos Vásquez"
        /*initialIsFollowing sirve para inicializar un estado, es una buena pratica llamarlo con initial ya que es el componente inicial.*/
        initialIsFollowing />

        <TwiterFolowCard
        userName="nodejs"
        name="Framework"
        isFollowing />

        <TwiterFolowCard
        userName="mongodb"
        name="Database"
        isFollowing />
        
        <TwiterFolowCard {...react} />
        <button className='tw-followCard-button change' onClick={() => setName('Pedro')}>
          Cambio de Nombre
        </button>
    </section>
  )
}

const users = [
  {
    userName: "karlosvas",
    name: "Carlos Vásquez",
    isFollowing: true
  },
  {
    userName: "nodejs",
    name: "Framework",
    isFollowing: false
  },
  {
    userName: "mongodb",
    name: "Database",
    isFollowing: false
  },
  {
    userName: "react",
    name: "React",
    isFollowing: false
  }
]

export function AppMap() {
  return(
    <section className='App'>
    {
      users.map(user =>{
        const {userName, name, isFollowing} = user
        return(<TwiterFolowCard userName={userName} initialIsFollowing={isFollowing} name= {name} />
        )
      }) 
    }
    <button className='tw-followCard-button change' onClick={() => setName('Pedro')}>
          Cambio de Nombre
        </button>
    </section>
  )
}
