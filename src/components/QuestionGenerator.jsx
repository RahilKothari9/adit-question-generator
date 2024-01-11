import React from 'react'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});


function QuestionGenerator() {
  return (
    <>
    </>
  )
}

export default QuestionGenerator