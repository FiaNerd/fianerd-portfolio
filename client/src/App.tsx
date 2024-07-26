import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './component/header/Header'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <div className='w-screens'>
        <Header />
        <div className='max-w-screen-xl px-6 mx-auto'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
