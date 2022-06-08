import React,{useState} from "react" 
 const States=()=>{
     const [data,setdata]=useState(0);
     const [details,setdetails]=useState({
         name:"manikanta",
         age:23,
         college:'pragati'
     })

     const DetailsChange=()=>{
       setdetails(prevState=>{
           return ({
               ...prevState,age:25
           })
       })
     }

     return (
         <>
         <h2>UseState Hook</h2>
         <h1>Count Value is :{data}</h1>
         <h2>{details.name}\\\\\{details.age}\\\\\{details.college}</h2>
         <button onClick={()=>setdata(data+1)}>Increase the count of the state variable</button>
         <button onClick={DetailsChange}>Increase the count of the state obj details variable</button>
         </>
     )
 }
 export default States