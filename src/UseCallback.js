import React,{useState,useCallback} from 'react'
import CallChild from './CallChild';

const UseCallback = () => {
    const [data,setdata]=useState(0);
    const [data1,setdata1]=useState(10);

    const FunHandle=()=>{
        setdata(data+1)
    }
    const FunHandle2=()=>{
        setdata1(data1+5)
    }

    const CallFunction =useCallback(()=>{
       return  FunHandle();
    },[data])
  return (
    <div>
        <h1>UseCallback-parent</h1>
        <h1>{data}</h1>
        <button onClick={FunHandle}>data</button>
        <button onClick={FunHandle2}>data1</button>
        <CallChild name="manikanta" fun={CallFunction}/>
    </div>
  )
}

export default UseCallback


