import React from 'react'
import Hoc from './Hoc'
const HocChild1 = (props) => {
  return (
    <div>
        <h1>{props.counts}</h1>
        <button onClick={props.handle}>Onclick11</button>
    </div>
  )
}

export default Hoc(HocChild1)