import React, { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import Button from '@mui/material/Button';


const generationConfig = {
    maxOutputTokens: 120,
    temperature: 1,
    topP: 0.95,
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
        1. "What is the most unexpected act of kindness you've witnessed or experienced in recent memory?"

        2. "If you had the power to instantly master a new skill or knowledge set, what would you choose and why?"
        
        3. Have you ever had a gut feeling or intuitive hunch turned out to be remarkably accurate? Share a story about it.
        
        4.  Who taught you most about yourself in the last year?

        5. What fruit represents your travel self?

        6. When do you feel most at home?

        7. Why do you over think your last big decision?

        8. What reminds you most of your favorite dessert?

        Return a single question with no formatting and having a maximum of 40 words. Make the language a informal.


        
        
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