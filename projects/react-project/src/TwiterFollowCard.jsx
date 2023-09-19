export function TwiterFolowCard ({ userName, name, isFollowing }) {
    const formatUserName = (<span>@${userName}</span>)
    /*
    formatUserName es un elemento, los elementos se pueden renderizar.
    Existe una propiedad o prop especial que se llama children, es todo lo que envuelbe al elemento, se le puede pasar por paramettro a el componente.

    Diferencia entre componente y elemento
    Componente: Factoria de elementos, una funcion que al ejecurtarla te devuelbe un elemento.
    Elemento: Es lo que renderiza react.
    Losc componentes crean elementos y los elementos son renderizados por react.
    */
    
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
  )
}
