
import React from 'react'
import Hint from "./Hint.jsx";

/*
const Hints = (props) => {
  const options = props.results.map((r, i) => (
    <li key={i}>
      {r.label}
    </li>
  ))
  return <ul>{options}</ul>
}

*/

const Hints = (props) => (
  <div>
    {props.results.map((r, i) => (
      <Hint
        key={i}
        hint={r.label}
        />
      ))}
  </div>
);

export default Hints