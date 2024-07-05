import React, { useEffect } from 'react';
import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = 'Default Title';
    let metaDescription = 'Default description';

    switch (pathname) {
      case '/':
        title = 'Home - Sabrina';
        metaDescription = 'Welcome to the Sabrina home page.';
        break;
      // Add other cases for different paths as needed
      default:
        title = 'Sabrina';
        metaDescription = 'Default description';
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Add other routes here as needed */}
    </Routes>
  );
}

export default App;
