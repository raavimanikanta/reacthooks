import React, { useReducer } from 'react'

const reducer =(state,action )=>{
  switch(action){
      case "increment" :
      return {count:state.count+1,showtext:state.showtext}
    case "toggle" :
        return {count:state.count,showtext:!state.showtext}
      default :
      return state.count ;
  }
}
const UseReducer = () => {
    const[state,dispatch]=useReducer( reducer,{count:0,showtext:true})
  return (
    <div>
        <h1>usereducer</h1>
      <h1>{state.count}</h1>
      <button onClick={()=>{
          dispatch("increment")
          dispatch("toggle")
      }}>click </button>

      {
          state.showtext ? <h1>data</h1> : null
      }
    </div>
  )
}

export default UseReducer