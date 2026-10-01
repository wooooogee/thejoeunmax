import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Mobile Hamburger menu order specified by user
  const navItems = [
    { name: '홈', path: '/' },
    { name: 'MAX CLASS', path: '/class' },
    { name: '라이프케어', path: '/life' },
    { name: '보험', path: '/insurance' },
    { name: '크루즈', path: '/cruise' },
    { name: '골프', path: '/golf' },
    { name: '사업자 홍보', path: '/business' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800' 
        : 'bg-slate-950/85 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
              THE JOEUN <span className="gold-gradient-text">MAX</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active 
                      ? 'text-amber-400 bg-amber-400/10 font-bold' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-lg shadow-md hover:shadow-amber-500/20 hover:brightness-110 transition-all transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4 mr-1.5" />
              무료 상담
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${
                      active 
                        ? 'text-amber-400 bg-amber-400/10 font-bold' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-slate-800">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full py-3 text-center text-sm font-black text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-lg"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  무료 상담 신청하기
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
