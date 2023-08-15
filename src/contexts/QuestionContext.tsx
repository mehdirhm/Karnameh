import React, { createContext, useContext, useState } from "react";
import { QuestionBox } from "@/Types/Types";
import {useQuery } from 'react-query'

type QuestionContextValue = {
    questions: QuestionBox[];
    modifyQuestion: (newQuestion: QuestionBox) => void; // Update the function signature
  };
  

const initialThemeContext: QuestionContextValue = {
  questions: [] ,
  modifyQuestion: () => {},
};

// Create the theme context
const QuestionContext = createContext<QuestionContextValue>(initialThemeContext);

// Define the type for the props of the ThemeContextProvider component
type QuestionContextProviderProps = {
  children: React.ReactNode;
};

// Create the ThemeContextProvider component
// ...

// Create the QuestionContextProvider component
export const QuestionContextProvider: React.FC<QuestionContextProviderProps> = ({
    children,
  }) => {
    const [questions, setQuestions] = useState<QuestionBox[]>([]);

    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:3004/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions([...data]);
        return data;
      })
  );
   
    
  
 
    // console.log(questions)
  
  
    const modifyQuestion = (newQuestion: QuestionBox) => {
      setQuestions((prevQuestions: QuestionBox[]) => [...prevQuestions, newQuestion]);
    };
  
    const questionContextValue: QuestionContextValue = {
      questions,
      modifyQuestion,
    };
  
    return (
      <QuestionContext.Provider value={questionContextValue}>
        {children}
      </QuestionContext.Provider>
    );
  };
  
  // ...
  

// Create a custom hook for using the theme context
export const useQuestion = () => useContext(QuestionContext);

export default QuestionContextProvider;