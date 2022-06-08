import { memo } from "react"
import React from 'react'

const PureChild = (props) => {
    console.log("i will render for changes  in the parent every time")
  return (
    <div>
        <h1>{props.name}</h1>
        <button onClick={props.fun}>onn</button>
    </div>
  )
}

export default memo(PureChild)