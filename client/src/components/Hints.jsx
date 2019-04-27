import React from 'react'


const Hints = ({results, handleClick}) => {
  return(
    <div>
      <ul>
      {results.map(item => <li onClick={()=>handleClick}>{item[0]}</li>)}
      </ul>
    </div>
  )
}

export default Hints;