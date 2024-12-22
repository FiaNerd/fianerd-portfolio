import { Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './pages/HomePage';
import SocialMediaAndContact from './component/SocialMediaAndContact';

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <div className="sticky top-0 h-screen bg-orange-100 py-2 text-amber-950 dark:bg-black dark:text-amber-100 z-50 pointer-events-auto">
        <SocialMediaAndContact />
      </div>

      {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
