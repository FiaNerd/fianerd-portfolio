import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './component/header/Header'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen px-6'>
        <Header />
        <main className='flex-grow max-w-screen-xl w-full mx-auto mb-12'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
