import { useEffect, useState } from "react";
import SingleData from "./singledata";



export default function User()
{


    const [user,setuser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setuser(data))


    },[])
    return (<div>

        <h1>user=:{user.length}</h1>
        {
            user.map(u=><SingleData single={u}></SingleData>)
        }


    </div> )

}