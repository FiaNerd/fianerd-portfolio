import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './component/header/Header';
import ErrorFallback from './component/partial/errors/ErrorFallback';
import SocialMediaAndContact from './component/SocialMediaAndContact';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

const handleErrorReset = () => {
  // Handle error reset logic here
};

const App = () => {
  return (
    <div className="App">
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
            <Suspense fallback={<div>Loading..</div>}>
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
};

export default App;