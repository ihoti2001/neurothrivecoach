import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBookingLink } from '../utils/calApi';

const About: React.FC = () => {
    const navigate = useNavigate();
    const [bookingUrl, setBookingUrl] = useState('');

    useEffect(() => {
        getBookingLink().then(setBookingUrl);
    }, []);

    const handleBooking = () => {
        if (bookingUrl) {
            window.location.href = bookingUrl;
        } else {
            navigate('/booking-options');
        }
    };

    return (
        <div className="flex flex-col items-center w-full flex-1">
            <section className="w-full max-w-7xl px-4 md:px-10 py-16 md:py-24">
                <div className="@container">
                    <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
                        <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-square rounded-3xl bg-center bg-cover shadow-lg" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAclRqW7LuwOAkhv-YReiypfs5cpu665HhlnFs0fTXOCsownyM-xjeel-QPNPAAMy-beljfpI3zrftoVwuyfdsc-IeZ6Fkbva85c-wR80DZ08wolGglo3nyv8BKQIfliNnP_KRJD8tOEq8v2iLw2kTFPisjUjdYaM8L9rDpWc-3tjbp-bZoRhL_y63h0M6f4n-AircfIX4tj21twZvi_K-lPr5wPAsOIKQtDBfww2ZVl_neCPK3KQ8L2J2wSomHXKXmPx1E5rDJs2o')"}}>
                        </div>
                        <div className="flex flex-col gap-6 md:w-1/2">
                            <div className="flex flex-col gap-4 text-left">
                                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl dark:text-white">
                                    Hi, I'm Alex. <br/>I help brains like ours thrive.
                                </h1>
                                <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                    I’m a certified ADHD coach dedicated to helping you turn chaos into clarity. I don't believe in "fixing" you because you aren't broken. Let's work with your unique brain wiring, not against it.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <button onClick={handleBooking} className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold shadow-sm">
                                    Book a Discovery Call
                                </button>
                                <Link to="/services" className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-text-light dark:text-white text-base font-medium">
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white dark:bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">My Philosophy</span>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-[720px] dark:text-white">
                                How we work together
                            </h2>
                            <p className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-[720px]">
                                Traditional productivity advice often fails us. My coaching approach is built on three neurodiversity-affirming pillars designed to reduce overwhelm and build sustainable habits.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-6 md:p-8 hover:shadow-md transition-shadow">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">star</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold dark:text-white">Strengths-Based</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark">
                                        We focus on identifying and leveraging what you're naturally good at, rather than constantly trying to fix what's 'wrong'.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-6 md:p-8 hover:shadow-md transition-shadow">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">psychology</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold dark:text-white">Neurodiversity-Affirming</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark">
                                        Your brain isn't broken. We build systems that fit your unique wiring instead of forcing you into neurotypical boxes.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-6 md:p-8 hover:shadow-md transition-shadow">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold dark:text-white">Action-Oriented</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark">
                                        Practical strategies and gentle accountability to help you move forward. We break big scary goals into tiny, doable steps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 md:px-10 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
                    <div className="md:col-span-4 lg:col-span-5 relative group">
                        <div className="absolute -inset-2 bg-primary/20 rounded-xl transform rotate-2 transition-transform group-hover:rotate-1"></div>
                        <div className="relative w-full aspect-[3/4] rounded-3xl bg-cover bg-center shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnGD7yubZ1IyXdltPJr9K1oeZ7LvaaG4r86v1Ka4cS67GRdmcg1yWbH047_QA_GIumWXZ7VREHlm1fl7OIWh5PI1wtODSPqCyI8iuLg4h0ueih_guFyig9yXy54Bs17nuHGFlQKjmDpSaTu_v0AmQUxziylBG9wtCDadA41TYPr0Ibnb_7KjkjFCtvp_87_80gwSFHb0PVVYEcAM544br7tHX0Y51z4bixiO7OUurweRbTS3NbK1Pmcj6EzfJcGcQZKVFZzlXZa_Q')"}}>
                        </div>
                    </div>
                    <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-6">
                        <h2 className="text-3xl font-bold leading-tight dark:text-white">My Journey</h2>
                        <div className="flex flex-col gap-4 text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            <p>
                                For years, I wondered why simple tasks felt like climbing Mount Everest. I was smart, capable, and ambitious, yet I constantly struggled with missed deadlines, lost keys, and a lingering sense of falling behind.
                            </p>
                            <p>
                                When I received my ADHD diagnosis in my late 20s, everything clicked. It wasn't a lack of willpower; it was a different operating system.
                            </p>
                            <p>
                                Since then, I've devoted my career to understanding the neuroscience of ADHD. I pivoted from a chaotic corporate career to coaching because I wanted to be the support system I wish I had.
                            </p>
                            <p className="font-medium text-text-light dark:text-white pt-2">
                                My mission is simple: to help you stop fighting your brain and start enjoying your life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-background-light dark:bg-background-dark py-20">
                <div className="max-w-3xl mx-auto px-4 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-10 text-center dark:text-white">Credentials &amp; Training</h2>
                    <div className="relative border-l-2 border-primary/20 ml-3 md:ml-0 pl-8 md:pl-10 space-y-10">
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[49px] top-1 size-6 rounded-full bg-primary border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white">Certified ADHD Professional (ADHD-CCSP)</h3>
                            <p className="text-sm text-primary font-medium mb-2">2023</p>
                            <p className="text-text-muted-light dark:text-text-muted-dark">Specialized training in executive function coaching and neurodiversity-affirming practices.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[49px] top-1 size-6 rounded-full bg-primary/40 border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white">International Coaching Federation (ICF) ACC</h3>
                            <p className="text-sm text-primary font-medium mb-2">2021</p>
                            <p className="text-text-muted-light dark:text-text-muted-dark">Accredited Coach Training Program focusing on ethical standards and core coaching competencies.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[49px] top-1 size-6 rounded-full bg-primary/20 border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white">M.S. in Psychology</h3>
                            <p className="text-sm text-primary font-medium mb-2">2018</p>
                            <p className="text-text-muted-light dark:text-text-muted-dark">University of California, specializing in cognitive behavioral approaches.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;