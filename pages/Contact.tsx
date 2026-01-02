import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    return (
        <div className="flex-grow layout-container flex flex-col items-center py-8 md:py-12 px-4 md:px-10">
            <div className="layout-content-container flex flex-col max-w-[1080px] w-full flex-1 gap-10">
                {/* Header Section */}
                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-[#111518] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                        Let's Connect
                    </h1>
                    <p className="text-[#637c88] dark:text-slate-400 text-lg font-normal leading-relaxed">
                        Reaching out can be hard, but I'm here to help. Fill out the form below, and I'll get back to you within 48 hours.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start mt-4">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-2/3 bg-white dark:bg-[#1a262d] p-6 md:p-10 rounded-3xl shadow-sm">
                        <form 
                            target="_blank" 
                            action="https://formsubmit.co/neurothrivecoach@gmail.com" 
                            method="POST"
                            className="flex flex-col gap-6"
                        >
                            {/* Hidden Configuration Fields for FormSubmit */}
                            <input type="hidden" name="_subject" value="New Contact Form Submission" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="flex flex-col md:flex-row gap-6">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#111518] dark:text-white text-base font-medium leading-normal pb-2">Full Name</p>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] dark:text-white bg-background-light dark:bg-[#111c21] border-none h-14 placeholder:text-[#637c88] p-[15px] text-base font-normal leading-normal transition-all focus:ring-2 focus:ring-primary shadow-inner" 
                                        placeholder="Full Name" 
                                        required 
                                    />
                                </label>
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#111518] dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] dark:text-white bg-background-light dark:bg-[#111c21] border-none h-14 placeholder:text-[#637c88] p-[15px] text-base font-normal leading-normal transition-all focus:ring-2 focus:ring-primary shadow-inner" 
                                        placeholder="Email Address" 
                                        required 
                                    />
                                </label>
                            </div>

                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#111518] dark:text-white text-base font-medium leading-normal pb-2">Your Message</p>
                                <textarea 
                                    name="message" 
                                    className="form-textarea flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-[#111518] dark:text-white bg-background-light dark:bg-[#111c21] border-none placeholder:text-[#637c88] p-[15px] text-base font-normal leading-normal transition-all resize-y focus:ring-2 focus:ring-primary shadow-inner" 
                                    placeholder="Your Message" 
                                    rows={10} 
                                    required
                                ></textarea>
                            </label>

                            <div className="pt-2">
                                <button 
                                    type="submit" 
                                    className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-lg shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                                >
                                    Submit Form
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        {/* Direct Email Card */}
                        <div className="flex flex-col gap-4 bg-white dark:bg-[#1a262d] p-6 rounded-3xl shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <p className="font-bold text-[#111518] dark:text-white">Direct Email</p>
                            </div>
                            <p className="text-sm text-[#637c88] dark:text-slate-400">Prefer not to use forms?</p>
                            <a className="text-primary font-medium hover:underline break-all" href="mailto:info@neurothrivecoach.co.uk">info@neurothrivecoach.co.uk</a>
                        </div>

                        <div className="flex flex-col gap-4 p-6">
                            <h3 className="text-xl font-bold text-[#111518] dark:text-white">Before you ask...</h3>
                            <p className="text-[#637c88] dark:text-slate-400 leading-relaxed">
                                I've compiled a list of common questions about my coaching style, pricing, and insurance. Checking here first might save you time!
                            </p>
                            <Link to="/services" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                View Frequently Asked Questions
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="p-6 bg-primary/5 dark:bg-primary/10 rounded-3xl">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                                <div>
                                    <h4 className="font-bold text-[#111518] dark:text-white mb-1">Privacy First</h4>
                                    <p className="text-sm text-[#637c88] dark:text-slate-400">
                                        Your information is safe. I am the only one who reads these emails, and I treat them with strict confidentiality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;