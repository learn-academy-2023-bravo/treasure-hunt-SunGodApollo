import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'
import Counter from './components/Counter'
import swal from 'sweetalert'


const App = () => {
  const [board, setBoard] = useState([
    "❓",
    "❓",
    "❓",
    "❓",
    "❓",
    "❓",
    "❓",
    "❓",
    "❓",
  ])

  const [count, setCount] = useState(5)

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length)) // generate a random number step 5

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  // this function is being passed into Square 
  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board] // use spread method to spread the whole board
    if(clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard)
      swal("You found the diamond! Congrats.")
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    } else if(clickedSquare === bombLocation) {
    updateBoard[clickedSquare] = "💣" // assign the updateBoard variable to update to a bomb on each index
    setBoard(updateBoard)
    swal("You dead. Game over.")
    setTimeout(() => {
      window.location.reload()
    }, 3000)
    } else if(count === 0) {
      swal("You are out of turns. Sucks to suck.")
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    }
    else {
      updateBoard[clickedSquare] = "🙊"
      setBoard(updateBoard)// use setter function to update board
      setCount(count - 1)
  }
}

const handleCounter = (clickedSquare) => {
  if (clickedSquare === treasureLocation || clickedSquare === bombLocation || clickedSquare === "🙊") {
    setCount(count - 1)
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
      </div>
      <div className="counter">
      <Counter 
            count = {count}
            handleCounter={handleCounter}
            />
      </div>

      <button onClick={handleRefreshButton}>Restart!</button>

    </>
  )
}

export default App
