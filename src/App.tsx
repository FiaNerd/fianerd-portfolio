import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ErrorFallback from './components/partials/errors/ErrorFallBack';
import SocialMediaAndContact from './components/SocialMediaAndContact';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/portfolios/PortfolioPage';
import PageNotFound from './pages/PageNotFound';
import BlogDeatilsPage from './pages/blog/BlogDeatilsPage';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import LoadingSpinner from './components/partials/LoadingSpinner';
import { useHeaderVisibility } from './hook/useHeaderVisibility';
import useHeaderHeight from './hook/useHeaderHeight';
import BlogPage from './pages/blog/BlogPage';
import PortfolioDetailsPage from './pages/portfolios/PortfolioDetailsPage';

const App = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const isHeaderVisible = useHeaderVisibility();
  const headerHeight = useHeaderHeight();

  // Monitor i18n's ready state
  useEffect(() => {
    if (i18n.isInitialized) {
      setIsLoading(false);
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
      <Header isHeaderVisible={isHeaderVisible} />
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="sticky top-0 h-screen bg-bg-secondary text-text-secondary dark:bg-black dark:text-text-accent z-50 pointer-events-auto">
          <SocialMediaAndContact />
        </div>
        {/* Main Content */}
        <main
          className="flex-grow"
          style={{
            marginTop: headerHeight,
            transition: 'top 0.3s ease',
            overflowX: 'hidden',
          }}
        >
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
              <Route
                path="/"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route path="/profile" element={<Navigate to="/" />} />
              <Route
                path="/profile"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route
                path="/profile/who-am-i"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route
                path="/profile/web-skills"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route
                path="/profile/graphic-skills"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route
                path="/profile/additional-skills"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route
                path="/profile/programs-and-softwares"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route
                path="/profile/experience"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route
                path="/profile/education"
                element={<HomePage headerHeight={headerHeight} />}
              />
              <Route
                path="/profile/hobbies"
                element={<HomePage headerHeight={headerHeight} />}
              />

              <Route
                path="/portfolio"
                element={<PortfolioPage headerHeight={headerHeight} />}
              />
              <Route
                path="/portfolio/my-work"
                element={<Navigate to="/portfolio" />}
              />
              <Route
                path="/portfolio/top-5-projects"
                element={<PortfolioPage headerHeight={headerHeight} />}
              />
              <Route
                path="/portfolio/frontend"
                element={<PortfolioPage headerHeight={headerHeight} />}
              />
              <Route
                path="/portfolio/backend"
                element={<PortfolioPage headerHeight={headerHeight} />}
              />
              <Route
                path="/portfolio/fullstack"
                element={<PortfolioPage headerHeight={headerHeight} />}
              />
              <Route
                path="/portfolio/graphic-design"
                element={<PortfolioPage headerHeight={headerHeight} />}
              />
              <Route
                path="/portfolio/:urlTitle"
                element={<PortfolioDetailsPage headerHeight={headerHeight} />}
              />

              {/* Blog Routes */}
              <Route path="/blog" element={<BlogPage />} />
              <Route
                path="/blog/:urlTitle"
                element={<BlogDeatilsPage headerHeight={headerHeight} />}
              />

              {/* Contact Route */}
              <Route
                path="/contact"
                element={<ContactPage headerHeight={headerHeight} />}
              />

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
