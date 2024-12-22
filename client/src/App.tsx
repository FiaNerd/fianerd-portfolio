import { Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './pages/HomePage';
import SocialMediaAndContact from './component/SocialMediaAndContact';

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen bg-orange-100 py-2 text-amber-950 dark:bg-black dark:text-amber-100 z-50 pointer-events-auto">
        <SocialMediaAndContact />
        {/* <header> */}
      </div>

      <div className="flex-1 flex flex-col">
        {/* </header> */}
          <Header />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
