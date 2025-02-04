import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './component/header/Header';
import SocialMediaAndContact from './component/SocialMediaAndContact';
import ErrorFallback from './component/partial/errors/ErrorFallback';

const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/portfolio/PortfolioPage'));

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

  return (
    <div className="flex flex-col min-h-screen">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
        <Header />
      </ErrorBoundary>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
          <div className="sticky top-0 h-screen bg-bg-secondary text-text-secondary dark:bg-black dark:text-text-accent z-50 pointer-events-auto">
            <SocialMediaAndContact />
          </div>
        </ErrorBoundary>

        {/* Main Content */}
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
          <main className="flex-grow">
            <Suspense fallback={<div >Loading..</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
              </Routes>
            </Suspense>
          </main>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;