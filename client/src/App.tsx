import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import HomePage from './pages/HomePage';
import SocialMediaAndContact from './component/SocialMediaAndContact';

function App() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-[auto,1fr]">
        {/* Social Media Column */}
        <div className="flex flex-col items-center py-8">
          <SocialMediaAndContact />
        </div>

        {/* Main Content */}
        <div className="flex flex-col">
          <Header />
          <main className="mx-auto flex-rows">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
