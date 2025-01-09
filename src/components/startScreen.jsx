import { useContext } from 'react'
import { contextPage } from '../context/contextpage';


const StartScreen = () => {

  const { setStart } = useContext(contextPage);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 p-6">
      <header className="text-center mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Hoş Geldiniz!</h1>
        <p className="text-lg text-gray-700">
          Bu test, 10 sorudan oluşmaktadır ve sizi eğlenceli bir bilgi yolculuğuna davet ediyor.
          Hazır olduğunuzda aşağıdaki butona tıklayarak teste başlayabilirsiniz. Bol şans!
        </p>
      </header>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition"
        onClick={() => setStart(false)}
      >
        Teste Başla
      </button>
    </main>
  )
}

export default StartScreen;