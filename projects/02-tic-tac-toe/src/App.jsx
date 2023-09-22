'use strict'
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from './logic/constants'
import { checkWinner, checkEndGame } from './logic/board'
import { Board } from './components/Board'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { resetGameStorage, saveGameStorage } from './logic/local-storage'

function App () {
  const [board, setBoard] = useState(() => {
    const boadFromStorage = window.localStorage.getItem('board')
    if (boadFromStorage) return JSON.parse(boadFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)
  // Resetear el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }
  // Actualizar tablero.
  const updateBoard = (index) => {
    // No actualizamos en el caso de que ya tenga algo.
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el turno.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    console.log(newTurn)
    setTurn(newTurn)
    // Guardar aqui partida.
    saveGameStorage({ newBoard, newTurn })
    // Revisar si hay ganador.
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      /*
    alert(`El ganador es ${newWinner}`)
    La renderizacion de los estados en react es asincrono por lo que se mostraria la alerta una vez se a renderizado el componente.
*/
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  /*
useEffect(()=>{
  console.log(`El ganador es ${winner}`)
  }, [winner])
Se ejecutara cada vez que se cumpla el segundo parametro
*/

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <Board board={board} updateBoard={updateBoard} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
