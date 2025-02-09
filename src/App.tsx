import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ErrorFallback from './components/partials/errors/ErrorFallBack';
import SocialMediaAndContact from './components/SocialMediaAndContact';
import HomePage from './pages/HomePage';
import PortfolioDetailsPage from './pages/portfolios/PortfolioDetailsPage';
import PortfolioPage from './pages/portfolios/PortfolioPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="sticky top-0 h-screen bg-bg-secondary text-text-secondary dark:bg-black dark:text-text-accent z-50 pointer-events-auto">
          <SocialMediaAndContact />
        </div>
        {/* Main Content */}
        <main className="flex-grow overflow-hidden">
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
            )}
            onReset={() => {
              // Reset the state of your app so the error doesn't happen again
              window.location.reload();
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:urlTitle" element={<PortfolioDetailsPage />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default App;