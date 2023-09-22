"use strict"
import { WINER_COMBOS } from "./constants"

export const checkWinner = (boardToCheck) => {
    // Revisamos todas los conbinaciones ganadoras, para ver si x o o ganó.
    for (const combo of WINER_COMBOS) {
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

// Revisar si hay empate si no hay mas casillas en el tablero.
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}

