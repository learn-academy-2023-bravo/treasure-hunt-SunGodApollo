import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  // this function is being passed into Square 4
  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board] // use spread method to spread the whole board
    updateBoard[clickedSquare] = "🌲" // assign the updateBoard variable to update to a tree on each index
    setBoard(updateBoard) // use setter function to update board
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      { // map over the array to return the square Step 1
        board.map((square, index) => {
          return <Square 
            square={square} 
            index={index} 
            key={index}
            handleGamePlay={handleGamePlay}
            />
        })
      }
      </div>
    </>
  )
}

export default App
