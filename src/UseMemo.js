import React,{useMemo, useState} from 'react'

const UseMemo = () => {
    const [item1,setitem1]=useState(0)
    const [item2,setitem2]=useState(10)


    const Memos=useMemo(function memo1(){
        console.log("iam memo function ")
        return item1+1;
    },[item1])
        
    
  return (
    <div>
        <h1> UseMemo hook</h1>
        <h2>item1: {item1}</h2>
        <h3>memo value : {Memos}</h3>
        <h2>item2: {item2}</h2>
        <button onClick={()=>setitem1(item1+2)}>11111</button>
        <button onClick={()=>setitem2(item2*5)}>22222</button>
    </div>
  )
}

export default UseMemo