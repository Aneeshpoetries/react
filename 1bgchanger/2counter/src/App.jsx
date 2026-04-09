import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const[counter,setCounter]=useState(15)
  const added=()=>{
    console.log("clicked",counter);
    if(counter===20){
      setCounter(counter)
    }
    else{
      setCounter(counter+1)
    }
    
  }
  const removed=()=>{
    console.log("removed value",counter)
    if(counter===0){
      setCounter(counter)
    }
    else{
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={added}>add value</button>
      <br/>
      <button onClick={removed}>delete value</button>
    </>
  )
}

export default App
