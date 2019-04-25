import React from 'react'


const Hints = ({results}) => {
  return(
    <div>
      {results.map(e =>{
        return(
      <ul>
        <li>{e}</li>
      </ul>
        )
        })}
    </div>
  )
}

/*

const Hints = (props) => {
  <div>
    {props.results.forEach(r => (
      <Hint
        hint={r.label}
        />
      ))}
  </div>
);
*/
export default Hints;