import { useContext } from 'react'
import { contextPage } from '../context/contextpage';
import { questions } from "../../public/questions"


function ResultScreen() {
    const { setStart, setCounter, answers, setAnswers, score, setScore, setShowAnswers } = useContext(contextPage);


    const restartTest = () => {
        setCounter(0)
        setAnswers([])
        setScore(0)
        setShowAnswers(true)
        setStart(true)
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 p-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Test Bitti!</h1>
            <p className="text-lg text-gray-700 mb-6">Cevaplarınızı kontrol edebilirsiniz.</p>

            <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                <ul className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-blue-500 mb-4">Doğru Cevaplar</h2>
                    {questions?.map((ans, i) => (
                        <li key={i} className="mb-2 text-gray-800">{ans.answer}</li>
                    ))}
                </ul>
                <ul className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-blue-500 mb-4">Sizin Cevaplarınız</h2>
                    {answers?.map((ans, i) => (
                        <li key={i} className={`mb-2 text-gray-800`}>{ans}</li>
                    ))}
                </ul>
            </div>
            <div className='flex justify-center items-center w-full max-w-4xl'>
                <ul className='className="bg-white p-6 rounded-lg shadow-md"'>
                    <h2 className="text-xl font-bold text-blue-500 mb-4"> Doğru Cevap Sayısı:  <span className='text-2xl	text-black' >{score}</span>
                    </h2>
                </ul>
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition"
                    onClick={() => restartTest()}
                >
                    Testi Tekrar Çöz
                </button>
            </div>
        </main>
    )
}

export default ResultScreen