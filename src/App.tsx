import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ErrorFallback from './components/partials/errors/ErrorFallBack';
import SocialMediaAndContact from './components/SocialMediaAndContact';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioDetailsPage from './pages/portfolios/WebPortfolioDetailsPage';
import PortfolioPage from './pages/portfolios/PortfolioPage';
import PageNotFound from './pages/PageNotFound';
import BlogPage from './pages/blog/BlogPage';
import BlogDeatilsPage from './pages/blog/BlogDeatilsPage';
import WebPortfolioDetailsPage from './pages/portfolios/WebPortfolioDetailsPage';

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
              <Route path="/home" element={<Navigate to="/" />} />
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

              {/* Portfolio Routes */}
              <Route path="/portfolio" element={<PortfolioPage />} />
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
                element={<WebPortfolioDetailsPage />}
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
