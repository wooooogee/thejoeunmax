import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

import Home from './pages/Home';
import Life from './pages/Life';
import Hybrid698 from './pages/Hybrid698';
import Premium540 from './pages/Premium540';
import Insurance from './pages/Insurance';
import Cruise from './pages/Cruise';
import Golf from './pages/Golf';
import Business from './pages/Business';
import MaxClass from './pages/MaxClass';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

// Scroll to top automatically on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
        
        {/* Fixed Header */}
        <Header />

        {/* Main Route Views */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life" element={<Life />} />
            <Route path="/life/hybrid698" element={<Hybrid698 />} />
            <Route path="/life/premium540" element={<Premium540 />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/cruise" element={<Cruise />} />
            <Route path="/golf" element={<Golf />} />
            <Route path="/business" element={<Business />} />
            <Route path="/class" element={<MaxClass />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Mobile Fixed CTA Bar */}
        <FloatingCTA />

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}
