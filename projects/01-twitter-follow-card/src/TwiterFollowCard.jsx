
import { useState } from "react" // Esto es un  hook, te permites añadirm funcionalidades a los componentes de react, o mejorar el rendimiento de tus componentes en  diferentes puntos del renderizado.

export function TwiterFolowCard ({ userName, name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    // AL hacer clcik se genera un estado interno ya que esta al nivel de cada uno de los elementos que crea el componente no esta compartido entre elementos.

    const formatUserName = (<span>@${userName}</span>)
    /*
    formatUserName es un elemento, los elementos se pueden renderizar.
    Existe una propiedad o prop especial que se llama children, es todo lo que envuelbe al elemento, se le puede pasar por paramettro a el componente.

    Diferencia entre componente y elemento
    Componente: Factoria de elementos, una funcion que al ejecurtarla te devuelbe un elemento.
    Elemento: Es lo que renderiza react.
    Losc componentes crean elementos y los elementos son renderizados por react.
    */
    const text = isFollowing ? 'Siguiendo' : "Seguir"
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : "tw-followCard-button"
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt="El avatar de karlosvas"
                src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Deajr de seguir</span>
                </button>
            </aside>
        </article>
  )
}
