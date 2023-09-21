import { useState } from 'react'
import './App.css'

const TURNS = {
  X: "x",
  O: "o"
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [ board, setBoard ] = useState(Array(9).fill(null))
  const [ turn, setTurn ] = useState(TURNS.X)
  const [ winner, setWinner ] = useState(null)

  const checkWinner = (boardToCheck) => {
    // Revisamos todas los conbinaciones ganadoras, para ver si x o o ganó.
    for(const combo of WINER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // 0 => x u o
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // Si no hay ganador.
    return null
  }
// Actualizar tablero
  const updateBoard = (index) => {
    // No actualizamos en el caso de que ya tenga algo.
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
// Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
// Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
/*
    alert(`El ganador es ${newWinner}`)
 La renderizacion de los estado en react es asincrono por lo que se mostraria la alerta una vez se a renderizado el componente.
*/
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
          </Square>
      </section>
    </main>
  )
}

export default App
