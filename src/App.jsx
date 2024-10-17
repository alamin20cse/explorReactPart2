import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import User from './user';

function App() {
 
  function handelClick1()
  {
    alert("button 1 is clicked");
  }

  const handelClick2=()=>
  {
    alert("button 2 is clicked");
  }

  const AddToFive=(nb)=>
  {

    let x=nb+5;
    alert("this is  "+x);
  }


  return (
    <>
      
      <h1>Vite + React</h1>
      <button onClick={handelClick1}>click 1</button>
      <button onClick={handelClick2}>click 2</button>
      <button onClick={()=>{alert("3rd button")}} > clik3</button>
      <button onClick={()=>AddToFive(5)} >Add 5</button>

      <Counter></Counter>


      <User></User>
      
     
    </>
  )
}

export default App
