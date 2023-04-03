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

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length)) // generate a random number step 5

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  // this function is being passed into Square 4
  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board] // use spread method to spread the whole board
    if(clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard)
    } else if(clickedSquare === bombLocation) {
    updateBoard[clickedSquare] = "💣" // assign the updateBoard variable to update to a bomb on each index
    setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🙊"
      setBoard(updateBoard)// use setter function to update board
  }
}

  // function to make button reload
  const handleRefreshButton = () => {
    window.location.reload(true)
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
      <button className ="button" onClick={handleRefreshButton}>Restart!</button>
      </div>

    </>
  )
}

export default App
