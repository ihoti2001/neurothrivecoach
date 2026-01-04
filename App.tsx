import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BookingOptions from './pages/BookingOptions';
import BookingCalendar from './pages/BookingCalendar';
import Blog from './pages/Blog';
import DynamicPage from './pages/DynamicPage';
import Layout from './components/Layout';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/pages/:type/:slug" element={<Layout><DynamicPage /></Layout>} />
        {/* Booking flows usually have a different or minimized layout, but for simplicity we keep basic layout or custom headers inside the page */}
        <Route path="/booking-options" element={<BookingOptions />} />
        <Route path="/booking-calendar" element={<BookingCalendar />} />
      </Routes>
    </HashRouter>
  );
};

export default App;