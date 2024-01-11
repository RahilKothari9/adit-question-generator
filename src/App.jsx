import { useState } from 'react'
import './App.css'
import QuestionGenerator from './components/QuestionGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuestionGenerator></QuestionGenerator>
    </>
  )
}

export default App
