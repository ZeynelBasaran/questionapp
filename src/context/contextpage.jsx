import React, { createContext, useState } from 'react';

export const contextPage = createContext();

export const ThemeProvider = ({ children }) => {


  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(true)



  return (
    <contextPage.Provider value={{ counter, setCounter, start, setStart, answers, setAnswers, score, setScore, showAnswers, setShowAnswers }}>
      {children}
    </contextPage.Provider>
  );
};
