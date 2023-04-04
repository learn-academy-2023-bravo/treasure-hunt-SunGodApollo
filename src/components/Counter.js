import React from "react"

const Counter = ({handleCounter, count}) => {

    const handleClick = () => {
        handleCounter(count)
      }

    return (
        <div onClick={handleClick}>Attempts remaining:{" "}{count}</div>
    )
}

export default Counter