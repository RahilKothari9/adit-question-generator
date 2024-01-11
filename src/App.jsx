import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Background } from './components/Background'
import QuestionGenerator from './components/QuestionGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Background/> */}
      <QuestionGenerator></QuestionGenerator>
    </>
  )
}

export default App
