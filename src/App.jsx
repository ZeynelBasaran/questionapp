import { useContext, useEffect } from "react";
import { contextPage } from "./context/contextpage";
import { questions } from "../public/questions";
import ResultScreen from "./components/resultScreen";
import StartScreen from "./components/startScreen";
import QuestionsScreen from "./components/questionScreen";

function App() {
  const { start, counter, setCounter, answers, setShowAnswers } =
    useContext(contextPage);

  useEffect(() => {
    if (start) return;

    const timer = setTimeout(() => {
      if (counter < questions.length) {
        setCounter(counter + 1);
        answers[counter] = "Cevaplanmadı";
        setShowAnswers(true);
      }
    }, 30000);

    const timerBtn = setTimeout(() => {
      setShowAnswers(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerBtn);
    };
  }, [start, counter]);

  if (start) {
    return <StartScreen />;
  }
  if (counter <= questions.length - 1) {
    return <QuestionsScreen />;
  } else {
    return <ResultScreen />;
  }
}
export default App;


