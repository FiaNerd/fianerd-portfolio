import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './component/header/Header'

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
      </div>
    </>
  )
}

export default App
