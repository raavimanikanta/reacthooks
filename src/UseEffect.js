import React, { useEffect,useState } from "react" 

const UseEffect =()=>{
    const [data,setdata]=useState(0);
 
    // this will act like both componentdidmount and componentdidupdate ...
    // useEffect(()=>{
    //     console.log("iam useeffect hook ")
    // })

    // this will act like component did mount and componentdidupdate for the particular state value change .....
    // useEffect(()=>{
    //     console.log("iam useeffect hook ")
    // },[data])

    useEffect(() => {
        console.log("Here, useEffect act as componentDidMount")
        return () => {
             console.log("Here, you can add clean up code - componentWillUnmount")
           };
       }, [data])



    return (
        <div>
           <h2>UseEffect hook example </h2>
           <h2>{data}</h2>
           <button onClick={()=>setdata(data+1)}>Change values </button>
        </div>
    )
}
export default UseEffect