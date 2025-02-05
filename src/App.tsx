import { Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="sticky top-0 h-screen bg-bg-secondary text-text-secondary dark:bg-black dark:text-text-accent z-50 pointer-events-auto">
          {/* Temporarily remove SocialMediaAndContact */}
        </div>
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;