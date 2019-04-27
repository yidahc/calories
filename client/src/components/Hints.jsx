import React from 'react'


const Hints = ({results}) => {
  return(
    <div>
      <ul>
      {results.map(item => <li>{item[0]}</li>)}
      </ul>
    </div>
  )
}

export default Hints;