import React,{useState} from 'react'

const Hoc = (WrappedComponent ) => {
  const HocDetails=()=>{
      const [count,setCount]=useState(0);

      const HandleChange=()=>{
          setCount(count+1)
      }
    return (
        <>
        <WrappedComponent 
          counts={count}
          handle={HandleChange}/>
        </>
      )
  }
 return HocDetails
  
}

export default Hoc