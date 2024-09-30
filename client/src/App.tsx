import { Route, Routes } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen '>
        <Header />
        {/* <main className='flex-grow max-w-7xl  w-full mx-auto mb-12'> */}
          <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
            </main>
        {/* </main> */}
        <Footer />
      </div>
    </>
  )
}

export default App
