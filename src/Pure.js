import React,{useCallback, useState} from 'react'
import PureChild from './PureChild'
const Pure = () => {
    const[count,setcount]=useState(5)
    const [name,setname]=useState("MANI")
    const HnadleChange=()=>{
        setcount(count+1)
    }
    const HandleName=()=>{
      setname("varmas")
    }
    const CallFun=useCallback(()=>{
      return HnadleChange()
    },[count])
   
  return (
    <div>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={HnadleChange}>click</button>
        <button onClick={ HandleName}>clickname</button>
        <PureChild name="mani" fun={CallFun}/>
    </div>
  )
}

export default Pure