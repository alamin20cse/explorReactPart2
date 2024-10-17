import { useState } from "react"


export default function Counter()
{

    const [count,setcount]=useState(0);
   
    const countHandel=()=>{

       let  ncount=count+1;
        setcount(ncount);
    }


    return ( <div className="add">

        <h2>Counter: {count} </h2>
        <button onClick={countHandel}>Count</button>
    </div> )
}