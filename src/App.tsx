import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

import SocialMediaAndContact from './components/SocialMediaAndContact';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/portfolios/PortfolioPage';
import PageNotFound from './pages/PageNotFound';
import BlogPage from './pages/blog/BlogPage';
import BlogDeatilsPage from './pages/blog/BlogDeatilsPage';
import PortfolioDetailsPage from './pages/portfolios/PortfolioDetailsPage';
import ErrorFallback from './components/partials/errors/ErrorFallBack';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import LoadingSpinner from './components/partials/LoadingSpinner';

const App = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // Monitor i18n's ready state
  useEffect(() => {
    if (i18n.isInitialized) {
      setIsLoading(true);
    } else {
      setIsLoading(true);
    }
  }, [i18n.isInitialized]);

  if (isLoading) {
    return (
      <div className="loading-container flex items-center justify-center h-screen  bg-gradient-to-br from-[#e48149] via-[#e13d03] to-[#691203] ">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="sticky top-0 h-screen bg-bg-secondary text-text-secondary dark:bg-black dark:text-text-accent z-50 pointer-events-auto">
          <SocialMediaAndContact />
        </div>
        {/* Main Content */}
        <main className="flex-grow ">
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ErrorFallback
                error={error}
                resetErrorBoundary={resetErrorBoundary}
              />
            )}
            onReset={() => {
              // Reset the state of your app so the error doesn't happen again
              window.location.reload();
            }}
          >
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<HomePage />} />
              <Route path="/profile/home" element={<Navigate to="/" />} />
              <Route path="/profile" element={<HomePage />} />
              <Route path="/profile/who-am-i" element={<HomePage />} />
              <Route path="/profile/web-skills" element={<HomePage />} />
              <Route path="/profile/graphic-skills" element={<HomePage />} />
              <Route path="/profile/additional-skills" element={<HomePage />} />
              <Route
                path="/profile/programs-and-softwares"
                element={<HomePage />}
              />
              <Route path="/profile/experience" element={<HomePage />} />
              <Route path="/profile/education" element={<HomePage />} />
              <Route path="/profile/hobbies" element={<HomePage />} />

              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route
                path="/portfolio/my-work"
                element={<Navigate to="/portfolio" />}
              />
              <Route
                path="/portfolio/top-5-projects"
                element={<PortfolioPage />}
              />
              <Route path="/portfolio/frontend" element={<PortfolioPage />} />
              <Route path="/portfolio/backend" element={<PortfolioPage />} />
              <Route path="/portfolio/fullstack" element={<PortfolioPage />} />
              <Route
                path="/portfolio/graphic-design"
                element={<PortfolioPage />}
              />
              <Route
                path="/portfolio/:urlTitle"
                element={<PortfolioDetailsPage />}
              />

              {/* Blog Routes */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:urlTitle" element={<BlogDeatilsPage />} />

              {/* Contact Route */}
              <Route path="/contact" element={<ContactPage />} />

              {/* 404 Page */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default App;
