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
      <div className="sticky top-0 h-screen mx-auto bg-bg-secondary text-text-secondary dark:bg-black dark:text-text-accent z-50 pointer-events-auto">
        <SocialMediaAndContact />
      </div>

      {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        {/* <div className="w-full flex justify-center flex-col">

        <Footer />
        </div> */}
    </div>
  );
}

export default App;
