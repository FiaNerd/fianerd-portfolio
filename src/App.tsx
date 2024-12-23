import { Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import SocialMediaAndContact from './component/SocialMediaAndContact';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <div className="sticky top-0 h-screen mx-auto bg-orange-100 text-amber-950 dark:bg-black dark:text-amber-100 z-50 pointer-events-auto">
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
