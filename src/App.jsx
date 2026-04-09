import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color,setColor]=useState("olive")
  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button onClick={()=>{setColor("olive")}} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>olive</button>
              <button onClick={()=>{setColor("red")}} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>red</button>
              <button onClick={()=>{setColor("blue")}} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
              <button onClick={()=>{setColor("orange")}} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>orange</button>
              <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>yellow</button>
              <button onClick={()=>{setColor("indigo")}} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"indigo"}}>indigo</button>
              <button onClick={()=>{setColor("violet")}} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>violet</button>
              <button onClick={()=>{setColor("black")}} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>black</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default App
