import React,{memo} from 'react'

const CallChild = (props) => {
    console.log("re-renders everytime when callback hook gets called  ")
  return (
     
    <div>
        <>
        <h1>CallChild</h1>
        <h1>{props.name}</h1>
        <button onClick={props.fun}>clicked</button>
        </>
    </div>
  )
}

export default memo(CallChild)