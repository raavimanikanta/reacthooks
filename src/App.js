import React from 'react'
import States from './UseState'
// import UseContext from './UseContext'
// import ContextChild from './ContextChild'
// import UseEffect from './UseEffect'
// import UseReducer from './UseReducer'
// import UseRef from './UseRef'
// import UseMemo from './UseMemo'
import UseCallback from './UseCallback'

const App = () => {
  return (
    <div>
    <States/> 

   <UseContext>
       <ContextChild/>
    </UseContext>
      
      <UseEffect/>

     <UseReducer/> 

     <UseRef/> 

    <UseMemo/>

     <UseCallback/>

    </div>
  )
}

export default App