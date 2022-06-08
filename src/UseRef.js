import React, { useRef,useState } from 'react'

const UseRef = () => {
    const inputRef=useRef(null)
    const [data,setdata]=useState()
    const Handleref=(e)=>{
        e.preventDefault()
        setdata(inputRef.current.value)
       
    }
  return (
    <div>
        <h2>UseRef</h2>
        <h1>{data}</h1>
        <form >
          
            <input type="text" ref={inputRef} />
            <button onClick={Handleref}>OnClick</button>
        </form>
    </div>
  )
}

export default UseRef