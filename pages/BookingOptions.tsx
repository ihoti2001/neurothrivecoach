import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBookingLink } from '../utils/calApi';

const BookingOptions: React.FC = () => {
    const navigate = useNavigate();
    const [freeUrl, setFreeUrl] = useState('');
    const [focusUrl, setFocusUrl] = useState('');
    const [bundleUrl, setBundleUrl] = useState('');

    useEffect(() => {
        // Try to match specific event types for these cards
        getBookingLink(['free', 'discovery', '15']).then(setFreeUrl);
        getBookingLink(['focus', 'session', 'single']).then(setFocusUrl);
        getBookingLink(['bundle', 'coaching']).then(setBundleUrl);
    }, []);

    const handleBooking = (url: string) => {
        if (url) {
            window.location.href = url;
        } else {
            // Fallback
            window.location.href = 'https://cal.com';
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap bg-surface-light dark:bg-surface-dark px-6 py-4 lg:px-40 shadow-sm">
                <Link to="/" className="flex items-center gap-4">
                    <img 
                        src="/neuro_thrive_coach_logo_display.png" 
                        alt="Neuro Thrive Coach" 
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </Link>
                <div className="flex flex-1 justify-end gap-8">
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <span className="material-symbols-outlined text-[#111518] dark:text-gray-300 text-lg group-hover:text-primary transition-colors">arrow_back</span>
                        <span className="text-[#111518] dark:text-gray-300 text-sm font-medium leading-normal group-hover:text-primary transition-colors">Back to Home</span>
                    </Link>
                </div>
            </header>
            <div className="flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
                    <div className="flex flex-col max-w-[1024px] flex-1">
                        <div className="flex flex-col gap-3 p-4 mb-4 w-full max-w-[600px] mx-auto">
                            <div className="flex gap-6 justify-between items-end">
                                <p className="text-[#111518] dark:text-white text-base font-bold leading-normal">Select Service</p>
                                <p className="text-[#637c88] dark:text-gray-400 text-sm font-normal leading-normal">Redirecting to Cal.com for booking</p>
                            </div>
                            <div className="rounded-full bg-[#dce2e5] dark:bg-gray-700 h-2 overflow-hidden">
                                <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{width: '100%'}}></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 p-4 text-center mb-8">
                            <div className="flex flex-col gap-3 max-w-2xl">
                                <h1 className="text-[#111518] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">How would you like to start?</h1>
                                <p className="text-[#637c88] dark:text-gray-400 text-lg font-normal leading-relaxed">Choose the session type that fits your needs today. No pressure, just progress.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-12">
                            <div className="flex flex-col gap-6 rounded-3xl hover:border-primary/50 transition-all duration-300 bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-lg p-6 lg:p-8">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="size-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined">coffee</span>
                                        </div>
                                        <span className="text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider rounded-full bg-green-100 dark:bg-green-900/40 px-3 py-1">Low Risk</span>
                                    </div>
                                    <h3 className="text-[#111518] dark:text-white text-xl font-bold leading-tight">Free Discovery Call</h3>
                                    <p className="flex items-baseline gap-1 mt-1">
                                        <span className="text-[#111518] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Free</span>
                                        <span className="text-[#637c88] dark:text-gray-400 text-sm font-medium">/ 15 mins</span>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Introduction &amp; Fit Check</span>
                                    </div>
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>No obligation chat</span>
                                    </div>
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Virtual coffee atmosphere</span>
                                    </div>
                                </div>
                                <button onClick={() => handleBooking(freeUrl)} className="w-full cursor-pointer rounded-lg h-12 px-4 bg-[#f0f3f4] dark:bg-gray-700 hover:bg-[#e1e6e9] dark:hover:bg-gray-600 text-[#111518] dark:text-white text-base font-bold transition-colors">
                                    Book Free Chat
                                </button>
                            </div>
                            <div className="flex flex-col gap-6 rounded-3xl border-2 border-primary bg-surface-light dark:bg-surface-dark shadow-xl relative p-6 lg:p-8 transform md:-translate-y-2">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                                    Most Popular
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined">target</span>
                                        </div>
                                    </div>
                                    <h3 className="text-[#111518] dark:text-white text-xl font-bold leading-tight">Focus Session</h3>
                                    <p className="flex items-baseline gap-1 mt-1">
                                        <span className="text-[#111518] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">£75</span>
                                        <span className="text-[#637c88] dark:text-gray-400 text-sm font-medium">/ 45 mins</span>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Deep dive on one specific issue</span>
                                    </div>
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Actionable Strategy &amp; Tools</span>
                                    </div>
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Immediate takeaways</span>
                                    </div>
                                </div>
                                <button onClick={() => handleBooking(focusUrl)} className="w-full cursor-pointer rounded-lg h-12 px-4 bg-primary hover:bg-primary-dark text-white text-base font-bold shadow-md shadow-primary/20 transition-all">
                                    Book Single Session
                                </button>
                            </div>
                            <div className="flex flex-col gap-6 rounded-3xl hover:border-primary/50 transition-all duration-300 bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-lg p-6 lg:p-8">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="size-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined">all_inclusive</span>
                                        </div>
                                        <span className="text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider rounded-full bg-purple-100 dark:bg-purple-900/40 px-3 py-1">Best Value</span>
                                    </div>
                                    <h3 className="text-[#111518] dark:text-white text-xl font-bold leading-tight">Coaching Bundle</h3>
                                    <p className="flex items-baseline gap-1 mt-1">
                                        <span className="text-[#111518] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">£280+</span>
                                        <span className="text-[#637c88] dark:text-gray-400 text-sm font-medium">/ 4 or 6 sessions</span>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Consistent accountability</span>
                                    </div>
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Flexible blocks</span>
                                    </div>
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Priority email support</span>
                                    </div>
                                    <div className="text-sm font-medium text-[#4f626d] dark:text-gray-300 flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                        <span>Best long-term value</span>
                                    </div>
                                </div>
                                <button onClick={() => handleBooking(bundleUrl)} className="w-full cursor-pointer rounded-lg h-12 px-4 bg-[#f0f3f4] dark:bg-gray-700 hover:bg-[#e1e6e9] dark:hover:bg-gray-600 text-[#111518] dark:text-white text-base font-bold transition-colors">
                                    View Packages
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingOptions;