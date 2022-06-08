import React from 'react'
import Hoc from './Hoc'
const HocChild2 = (props) => {
  return (
    <div>
        <h1>{props.counts}</h1>
        <button onClick={props.handle}>Onclick2</button>
    </div>
  )
}

export default Hoc(HocChild2)