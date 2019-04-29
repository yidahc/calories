import React from 'react'


const Hints = ({results, handleClick}) => {
  return(
    <div>
      <ul className="font">
  {results.map((item, i) => (<li key={i} onClick={()=>handleClick(i)} >{item[0]}</li>
  ))}
      </ul>
    </div>
  )
}

export default Hints;