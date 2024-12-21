import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import HomePage from './pages/HomePage';
import SocialMediaAndContact from './component/SocialMediaAndContact';

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-grow relative flex">
          {/* Social Media & Contact */}
          <div className="sticky top-0 h-screen bg-accent-primary flex items-center text-amber-100 dark:text-amber-950">
            <div className="p-2 md:p-4">
              <SocialMediaAndContact />
            </div>
          </div>

          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
