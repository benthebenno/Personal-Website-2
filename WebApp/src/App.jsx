import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackGround from './components/InteractiveBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BackGround></BackGround>
  )
}

export default App
