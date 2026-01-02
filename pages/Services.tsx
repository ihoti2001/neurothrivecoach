import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBookingLink } from '../utils/calApi';

const Services: React.FC = () => {
    const navigate = useNavigate();
    const [singleSessionUrl, setSingleSessionUrl] = useState('');
    const [kickstarterUrl, setKickstarterUrl] = useState('');
    const [transformationUrl, setTransformationUrl] = useState('');
    const [generalUrl, setGeneralUrl] = useState('');
    const [discoveryUrl, setDiscoveryUrl] = useState('');

    useEffect(() => {
        // Fetch booking links on mount
        getBookingLink(['single', 'session', '45']).then(setSingleSessionUrl);
        getBookingLink(['kickstarter', '4']).then(setKickstarterUrl);
        getBookingLink(['transformation', '6']).then(setTransformationUrl);
        // Specific link for free discovery call (15 mins)
        getBookingLink(['free', '15', 'consultation', 'discovery']).then(setDiscoveryUrl);
        getBookingLink().then(setGeneralUrl);
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
        <div className="w-full bg-background-light dark:bg-background-dark text-text-main dark:text-white font-sans">
            
            {/* Header Section */}
            <div className="w-full pt-16 pb-12 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#111518] dark:text-white tracking-tight">
                    Services & Pricing
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Flexible ADHD coaching options to support your journey. Start with a free consultation, then choose what works best for you.
                </p>
            </div>

            {/* Pricing Cards Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    
                    {/* Free Discovery Call */}
                    <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col h-full hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl mb-2 text-[#111518] dark:text-white">Free Discovery Call</h3>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-3xl font-black text-primary">FREE</span>
                            <span className="text-sm text-gray-500 font-medium ml-1">15 minutes</span>
                        </div>
                        <div className="h-px bg-gray-100 dark:bg-gray-800 w-full my-4"></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Get to know each other</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Discuss your goals and challenges</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Learn about my coaching approach</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Ask any questions you have</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>No obligation to continue</span>
                            </li>
                        </ul>
                        <button 
                            onClick={() => handleBooking(discoveryUrl || generalUrl)} 
                            className="w-full py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-bold text-[#111518] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Single Session */}
                    <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col h-full hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl mb-2 text-[#111518] dark:text-white">Single Session</h3>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-3xl font-black text-primary">£75</span>
                            <span className="text-sm text-gray-500 font-medium ml-1">per 45-min session</span>
                        </div>
                        <div className="h-px bg-gray-100 dark:bg-gray-800 w-full my-4"></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Focused 45-minute coaching session</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Personalised strategies and tools</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Action plan for immediate implementation</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Online via Google Meet</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Optional in-person (Canterbury area)</span>
                            </li>
                             <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Flexible scheduling</span>
                            </li>
                        </ul>
                        <button 
                            onClick={() => handleBooking(singleSessionUrl)} 
                            className="w-full py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-bold text-[#111518] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* 4-Session Package */}
                    <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col h-full hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl mb-2 text-[#111518] dark:text-white">4-Session Package</h3>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-sm text-gray-400 line-through">£300</span>
                            <span className="text-3xl font-black text-primary">£280</span>
                            <span className="text-sm text-gray-500 font-medium">£70 per session</span>
                        </div>
                        <div className="h-px bg-gray-100 dark:bg-gray-800 w-full my-4"></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Save £20 on individual sessions</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Four 45-minute coaching sessions</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Comprehensive progress tracking</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Email support between sessions</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Workbooks and resources included</span>
                            </li>
                             <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Valid for 3 months</span>
                            </li>
                        </ul>
                        <button 
                            onClick={() => handleBooking(kickstarterUrl)} 
                            className="w-full py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-bold text-[#111518] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* 6-Session Package */}
                    <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-md border-2 border-primary/20 flex flex-col h-full relative transform lg:-translate-y-2">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ccfbf1] text-primary-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Best Value
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-[#111518] dark:text-white mt-1">6-Session Package</h3>
                        <div className="flex items-baseline gap-2 mb-2">
                             <span className="text-sm text-gray-400 line-through">£450</span>
                            <span className="text-3xl font-black text-primary">£420</span>
                            <span className="text-sm text-gray-500 font-medium">£70 per session</span>
                        </div>
                        <div className="h-px bg-gray-100 dark:bg-gray-800 w-full my-4"></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Best value - Save £30</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Six 45-minute coaching sessions</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>In-depth transformation programme</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Priority email support</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Custom resources and toolkits</span>
                            </li>
                             <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                <span>Valid for 4 months</span>
                            </li>
                        </ul>
                        <button 
                            onClick={() => handleBooking(transformationUrl)} 
                            className="w-full py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-colors shadow-sm"
                        >
                            Book Now
                        </button>
                    </div>

                </div>
            </div>

            {/* Banner */}
            <div className="bg-gray-50 dark:bg-[#1a262d] py-6 px-4 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                     <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base">
                        <span className="font-bold">Not sure which option is right for you?</span> Book a free discovery call and we'll discuss the best path forward.
                    </p>
                </div>
            </div>

            {/* What to Expect */}
            <div className="max-w-3xl mx-auto px-4 mb-24">
                <h2 className="text-3xl font-bold text-center mb-4 text-[#111518] dark:text-white">What to Expect in Your Sessions</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Every coaching session is tailored to your unique needs and goals.</p>
                
                <div className="space-y-4">
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-lg mb-2 text-[#111518] dark:text-white">1. Check-In & Goal Setting (5-10 mins)</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            We start each session by reviewing progress since our last meeting and setting intentions for today's focus.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-lg mb-2 text-[#111518] dark:text-white">2. Exploration & Strategy Development (25-30 mins)</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            The heart of our work together. We explore challenges, celebrate wins, and develop practical strategies tailored to your ADHD brain and lifestyle.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-lg mb-2 text-[#111518] dark:text-white">3. Action Planning & Commitment (5-10 mins)</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            We wrap up with a clear action plan—specific, achievable steps you'll take before our next session.
                        </p>
                    </div>
                </div>
            </div>

            {/* Delivery Options */}
            <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
                 <h2 className="text-3xl font-bold mb-4 text-[#111518] dark:text-white">Session Delivery Options</h2>
                 <p className="text-gray-600 dark:text-gray-400 mb-12">Choose the format that works best for your lifestyle and preferences.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                     <div className="flex flex-col items-center gap-3">
                         <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center mb-2">
                             <span className="material-symbols-outlined text-3xl">videocam</span>
                         </div>
                         <h3 className="font-bold text-lg text-[#111518] dark:text-white">Online Sessions</h3>
                         <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[250px]">
                            Available to clients across the UK via Google Meet. All you need is a computer or smartphone with internet connection.
                         </p>
                     </div>
                     <div className="flex flex-col items-center gap-3">
                         <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center mb-2">
                             <span className="material-symbols-outlined text-3xl">location_on</span>
                         </div>
                         <h3 className="font-bold text-lg text-[#111518] dark:text-white">In-Person Sessions</h3>
                         <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[250px]">
                            Available within 25 miles of Canterbury, Kent. Meet in a comfortable, confidential setting at a mutually convenient location.
                         </p>
                     </div>
                     <div className="flex flex-col items-center gap-3">
                         <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center mb-2">
                             <span className="material-symbols-outlined text-3xl">schedule</span>
                         </div>
                         <h3 className="font-bold text-lg text-[#111518] dark:text-white">Flexible Scheduling</h3>
                         <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[250px]">
                            Evening and weekend appointments available to accommodate work schedules and family commitments.
                         </p>
                     </div>
                     <div className="flex flex-col items-center gap-3">
                         <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center mb-2">
                             <span className="material-symbols-outlined text-3xl">security</span>
                         </div>
                         <h3 className="font-bold text-lg text-[#111518] dark:text-white">Confidential & Safe</h3>
                         <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[250px]">
                            Your privacy is paramount. All sessions are completely confidential and conducted in a judgment-free environment.
                         </p>
                     </div>
                 </div>
            </div>

            {/* Who Can Benefit */}
            <div className="w-full bg-background-light dark:bg-background-dark pb-24">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#111518] dark:text-white">Who Can Benefit from Coaching?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-primary mb-6">Adults with ADHD</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Struggling with time management and organization</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Recently diagnosed and seeking support</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Managing work/life balance challenges</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Building sustainable routines and habits</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Navigating relationships and communication</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold text-primary mb-6">Parents of Neurodivergent Children</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Supporting children with ADHD or autism</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Understanding neurodivergent needs</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Navigating school systems and accommodations</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Managing challenging behaviours with compassion</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                                    <span>Building strong family relationships</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="max-w-4xl mx-auto px-4 pb-24">
                <h2 className="text-3xl font-bold text-center mb-10 text-[#111518] dark:text-white">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-4">
                    <details className="group bg-white dark:bg-surface-dark rounded-xl border-l-4 border-transparent open:border-primary p-2 transition-all duration-200">
                        <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-[#111518] dark:text-white select-none">
                            <span>Do I need a formal ADHD diagnosis to work with you?</span>
                            <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            No. While many of my clients have a formal diagnosis, coaching can benefit anyone who identifies with ADHD traits or neurodivergent thinking patterns.
                        </div>
                    </details>
                    
                    <details className="group bg-white dark:bg-surface-dark rounded-xl border-l-4 border-transparent open:border-primary p-2 transition-all duration-200">
                        <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-[#111518] dark:text-white select-none">
                            <span>How is coaching different from therapy?</span>
                            <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Coaching focuses on the present and future—setting goals, developing strategies, and creating action plans. Therapy typically explores past experiences and mental health treatment. Both are valuable, and can complement each other.
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-surface-dark rounded-xl border-l-4 border-transparent open:border-primary p-2 transition-all duration-200">
                        <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-[#111518] dark:text-white select-none">
                            <span>How many sessions will I need?</span>
                            <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            This varies by individual. Some clients achieve their goals in 4-6 sessions, while others prefer ongoing support. We'll discuss what's right for you during your free consultation.
                        </div>
                    </details>

                    <details className="group bg-white dark:bg-surface-dark rounded-xl border-l-4 border-transparent open:border-primary p-2 transition-all duration-200">
                        <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-[#111518] dark:text-white select-none">
                            <span>What's your cancellation policy?</span>
                            <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Please provide at least 24 hours notice to cancel or reschedule. Cancellations with less than 24 hours notice will be charged at the full session rate.
                        </div>
                    </details>
                </div>
            </div>

        </div>
    );
};

export default Services;