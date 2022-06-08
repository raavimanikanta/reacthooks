import React, { createContext,useState } from "react"
 

export const UserContext =createContext();

const UseContext=(props)=>{
      const [data,setdata]=useState([{
          name:'manikanta varma',
          age:23,
          college:'jntuk '
      }])
      return (
          <>
          <UserContext.Provider value={[data,setdata]} >
              {props.children}
          </UserContext.Provider>


          </>
      )
}
export default UseContext
