import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind test</h1>
      <Card username="chai aur code" btn="click here"/>
      <Card username="aneesh" />
      
      
    </>
  )
}

export default App
