import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const ContextChild = () => {
    const [data,setdata]=useContext(UserContext)
  return (
    <div>
        {
            data.map((result,index)=>
                <div key={index}>
                    <h1>{result.name}</h1>
                    <h1>{result.age}</h1>
                    <h1>{result.college}</h1>
                </div>
            )
        }
    </div>
  )
}

export default ContextChild