import React from "react"

const Square = ({square, index, handleGamePlay}) => {

  //step 3
  const handleClick = () => {
    handleGamePlay(index)
  }

  // step 2
  return (
    <>
      
      <div className="square" onClick={handleClick}>{square}</div>
    </>
  )
}
export default Square
