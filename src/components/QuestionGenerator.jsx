import React, { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import Button from '@mui/material/Button';


const generationConfig = {
    maxOutputTokens: 120,
    temperature: 1,
    topK: 35,
  };

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig});


function QuestionGenerator() {

    const [question, setQuestion] = useState();

    async function run() {
        setQuestion('Loading....')
      
        const prompt = `Generate 1 single question, which I can use as a conversation starter with family or friends. 
        Some example questions are 
        
        1.  Who taught you most about yourself in the last year?

        2. What fruit represents your travel self?

        3. When do you feel most at home?

        Speak casually
        Return a single question with no formatting and having a maximum of 50 words and minimum of 20.
        DO NOT end your sentences with who would it be and why or phrases of that nature, generally ending in and why or how.
        Make the questions exciting, dont address people with phrases like my friends, hey everyone etc.
        Ask about experiences, personal milestones, personal events, preferences, choices, tastes, relationships .
        Have the questions be a little out of the box.
        
        `;
      
        const result = await model.generateContent(prompt);
        
        const response = await result.response;
    
        const text = response.text();
        setQuestion(text);
      }

    useEffect(() => {
      run();
    }, [])
    
  return (
    <>
    <div style={{ marginLeft:"5%", width:"80%"}}>
        <div >
            <h2>{question}</h2>
            <Button variant="contained" sx={{backgroundColor:"white", color:"black", mt: 2, fontFamily:"Raleway"}} onClick={run}>Regenerate</Button>
        </div>
    </div>
        
    </>
  )
}

export default QuestionGenerator