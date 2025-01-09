import { useContext } from 'react'
import { contextPage } from '../context/contextpage';
import { questions } from "../../public/questions"

const QuestionsScreen = () => {
  const { counter, showAnswers, setScore, setAnswers, setCounter, setShowAnswers, score } = useContext(contextPage);

  const saveAnswer = (e) => {
    if (e.innerHTML === questions[counter].answer) {
      setScore(score + 1)
    }
    setAnswers(prev => [...prev, e.innerHTML])
    if (counter < questions.length) {
      setCounter(counter + 1)
      setShowAnswers(true)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        {questions[counter].question}
      </h1>
      <ul className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mb-8">
        {questions[counter].options.map((option, index) => (
          <li
            key={index}
            className={`py-2 px-4 mb-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium text-center rounded transition-opacity duration-1000
        ${showAnswers ? "opacity-0 invisible" : "opacity-100 visible"}`}
            onClick={(e) => saveAnswer(e.target)}
          >
            {option}
          </li>
        ))}
      </ul>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <img
          src={questions[counter].media}
          alt=""
          className="w-full h-auto rounded"
        />
      </div>
    </main>
  )
}

export default QuestionsScreen;