import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import SocialMediaAndContact from './component/SocialMediaAndContact';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <div className="sticky top-0 h-screen mx-auto bg-bg-secondary text-text-secondary dark:bg-black dark:text-text-accent z-50 pointer-events-auto">
        <SocialMediaAndContact />
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/portfolio" element={<PortfolioLayout />}> */}
            <Route path='/portfolio' element={<PortfolioPage />} />
          {/* </Route> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
