import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './component/header/Header';
import ErrorFallback from './component/partial/errors/ErrorFallback';
import SocialMediaAndContact from './component/SocialMediaAndContact';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
  const navigate = useNavigate();

  const handleErrorReset = () => {
    navigate('/');  
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, []);

  
  // const headerHeight = document.getElementById('header')?.clientHeight || 0;
  // useSmoothScroll(headerHeight);

  return (
    <div className="min-h-screen flex">
      {/* Header */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
        <Header />
      </ErrorBoundary>

      {/* Sidebar */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
      <div className="sticky top-0 h-screen mx-auto bg-bg-secondary text-text-secondary dark:bg-black dark:text-text-accent z-50 pointer-events-auto">
        <SocialMediaAndContact />
      </div>
      </ErrorBoundary>

      {/* Main Content */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/portfolio" element={<PortfolioLayout />}> */}
            <Route path='/portfolio' element={<PortfolioPage />} />
          {/* </Route> */}
        </Routes>
      </main>
      </ErrorBoundary>
    </div>
  );
}

export default App;
