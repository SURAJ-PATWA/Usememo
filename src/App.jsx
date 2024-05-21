import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[add,setAdd]=useState(0);
  const[minus,setMinus]=useState(100)

  // function multiply(){
  //   console.log("sssssssssssssssssssssssss");// jab add button ko clicktabhi multiply sssss print karna chiye but ye dono per
  //                       //work kar raha haa unwanted portion  
  //                //fun ko bhi exucted kar raha haa solution haa usememo jis fun ko target karoge wahi update hoga
  //   return add*10;
  // }


  const mul=useMemo(function multiply(){
    console.log("sssssssssssssssssssssssss");
    return add*10;
  },[add])// if any update add target hit mul fun ka

  return (
    <>
    {mul}<br/>
   <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span><br/>
      
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
      <span>{minus}</span><br/>
    </>
  )
}

export default App
