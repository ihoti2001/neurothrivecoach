import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="sticky top-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm shadow-sm transition-all duration-300">
            <div className="flex justify-center w-full">
                <div className="w-full max-w-[1280px] px-4 md:px-10 py-3">
                    <header className="flex items-center justify-between whitespace-nowrap gap-4">
                        <Link to="/" className="flex items-center gap-3 shrink-0">
                            <img
                                src="/logo.png"
                                alt="Neuro Thrive Coach"
                                className="h-12 md:h-16 w-auto object-contain"
                            />
                        </Link>
                        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                            <nav className="flex items-center gap-8">
                                <Link to="/" className={`text-lg font-bold leading-normal transition-colors ${isActive('/') ? 'text-primary' : 'text-text-main dark:text-gray-300 hover:text-primary'}`}>Home</Link>
                                <Link to="/about" className={`text-lg font-bold leading-normal transition-colors ${isActive('/about') ? 'text-primary' : 'text-text-main dark:text-gray-300 hover:text-primary'}`}>About</Link>
                                <Link to="/services" className={`text-lg font-bold leading-normal transition-colors ${isActive('/services') ? 'text-primary' : 'text-text-main dark:text-gray-300 hover:text-primary'}`}>Services</Link>
                                <Link to="/contact" className={`text-lg font-bold leading-normal transition-colors ${isActive('/contact') ? 'text-primary' : 'text-text-main dark:text-gray-300 hover:text-primary'}`}>Contact</Link>
                            </nav>
                            <Link
                                to="/services"
                                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-colors text-white text-lg font-bold leading-normal tracking-[0.015em]"
                            >
                                <span className="truncate">Book Session</span>
                            </Link>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-text-main dark:text-white">
                                <span className="material-symbols-outlined text-3xl">menu</span>
                            </button>
                        </div>
                    </header>
                    {/* Simple Mobile Menu Overlay */}
                    {mobileMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark p-4 flex flex-col gap-4 shadow-lg animate-slide-in z-50">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded dark:text-white">Home</Link>
                            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded dark:text-white">About</Link>
                            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded dark:text-white">Services</Link>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded dark:text-white">Contact</Link>
                            <button
                                data-cal-link="neurothrivecoach/25min"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-primary text-white text-center py-3 rounded-lg font-bold text-lg"
                            >
                                Book Session
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Footer: React.FC = () => (
    <footer className="w-full bg-white dark:bg-[#162228] mt-auto border-t border-gray-100 dark:border-gray-800">
        <div className="w-full max-w-[1280px] px-4 md:px-10 py-12 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Neuro Thrive Coach"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </Link>
                <div className="flex gap-8 flex-wrap justify-center">
                    <Link to="/privacy-policy" className="text-text-muted dark:text-gray-400 hover:text-primary text-sm font-medium">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="text-text-muted dark:text-gray-400 hover:text-primary text-sm font-medium">Terms of Service</Link>
                    <Link to="/contact" className="text-text-muted dark:text-gray-400 hover:text-primary text-sm font-medium">Contact</Link>
                </div>
                <div className="flex gap-4">
                    <a className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors" href="#" aria-label="TikTok">
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                        </svg>
                    </a>
                    <a className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors" href="#" aria-label="Instagram">
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.451 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                    </a>
                    <a className="text-text-muted dark:text-gray-400 hover:text-primary transition-colors" href="#" aria-label="Facebook">
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="mt-8 text-center text-xs text-text-muted dark:text-gray-500">
                (c) 2024 Neuro Thrive Coach. All rights reserved.
            </div>
        </div>
    </footer>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-white">
            <Header />
            <main className="flex flex-col flex-1 w-full items-center">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
