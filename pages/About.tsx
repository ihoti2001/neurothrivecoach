import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import butter from '../utils/buttercms';

const About: React.FC = () => {
    const navigate = useNavigate();
    const [pageContent, setPageContent] = useState<any>(null);
    // loading state removed as it was unused in the render

    useEffect(() => {
        const fetchAboutContent = async () => {
            try {
                const resp = await butter.page.retrieve('*', 'about');
                if (resp && resp.data && resp.data.data) {
                    setPageContent(resp.data.data);
                }
            } catch (error) {
                console.log("Could not fetch About content from ButterCMS, using default.", error);
            }
        };

        fetchAboutContent();
    }, []);

    const handleBooking = () => {
        navigate('/services');
    };

    const defaults = {
        hero_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAclRqW7LuwOAkhv-YReiypfs5cpu665HhlnFs0fTXOCsownyM-xjeel-QPNPAAMy-beljfpI3zrftoVwuyfdsc-IeZ6Fkbva85c-wR80DZ08wolGglo3nyv8BKQIfliNnP_KRJD8tOEq8v2iLw2kTFPisjUjdYaM8L9rDpWc-3tjbp-bZoRhL_y63h0M6f4n-AircfIX4tj21twZvi_K-lPr5wPAsOIKQtDBfww2ZVl_neCPK3KQ8L2J2wSomHXKXmPx1E5rDJs2o",
        headline: "Hi, I'm Alex. <br/>I help brains like ours thrive.",
        intro_text: "I’m a certified ADHD coach dedicated to helping you turn chaos into clarity. I don't believe in \"fixing\" you because you aren't broken. Let's work with your unique brain wiring, not against it.",

        philosophy_subhead: "My Philosophy",
        philosophy_headline: "How we work together",
        philosophy_intro: "Traditional productivity advice often fails us. My coaching approach is built on three neurodiversity-affirming pillars designed to reduce overwhelm and build sustainable habits.",

        pillar_1_title: "Strengths-Based",
        pillar_1_desc: "We focus on identifying and leveraging what you're naturally good at, rather than constantly trying to fix what's 'wrong'.",

        pillar_2_title: "Neurodiversity-Affirming",
        pillar_2_desc: "Your brain isn't broken. We build systems that fit your unique wiring instead of forcing you into neurotypical boxes.",

        pillar_3_title: "Action-Oriented",
        pillar_3_desc: "Practical strategies and gentle accountability to help you move forward. We break big scary goals into tiny, doable steps.",

        journey_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnGD7yubZ1IyXdltPJr9K1oeZ7LvaaG4r86v1Ka4cS67GRdmcg1yWbH047_QA_GIumWXZ7VREHlm1fl7OIWh5PI1wtODSPqCyI8iuLg4h0ueih_guFyig9yXy54Bs17nuHGFlQKjmDpSaTu_v0AmQUxziylBG9wtCDadA41TYPr0Ibnb_7KjkjFCtvp_87_80gwSFHb0PVVYEcAM544br7tHX0Y51z4bixiO7OUurweRbTS3NbK1Pmcj6EzfJcGcQZKVFZzlXZa_Q",
        journey_title: "My Journey",
        journey_text: `For years, I wondered why simple tasks felt like climbing Mount Everest. I was smart, capable, and ambitious, yet I constantly struggled with missed deadlines, lost keys, and a lingering sense of falling behind.

When I received my ADHD diagnosis in my late 20s, everything clicked. It wasn't a lack of willpower; it was a different operating system.

Since then, I've devoted my career to understanding the neuroscience of ADHD. I pivoted from a chaotic corporate career to coaching because I wanted to be the support system I wish I had.`,
        journey_mission: "My mission is simple: to help you stop fighting your brain and start enjoying your life.",

        credentials_title: "Credentials & Training",
        cred_1_title: "Certified ADHD Professional (ADHD-CCSP)",
        cred_1_year: "2023",
        cred_1_desc: "Specialized training in executive function coaching and neurodiversity-affirming practices.",

        cred_2_title: "International Coaching Federation (ICF) ACC",
        cred_2_year: "2021",
        cred_2_desc: "Accredited Coach Training Program focusing on ethical standards and core coaching competencies.",

        cred_3_title: "M.S. in Psychology",
        cred_3_year: "2018",
        cred_3_desc: "University of California, specializing in cognitive behavioral approaches."
    };

    // Merge defaults with pageContent fields to ensure all required fields exist
    const content = { ...defaults, ...(pageContent?.fields || {}) };

    // Helper to render journey text paragraphs which we might get as a single blob or HTML
    const renderJourneyText = () => {
        if (pageContent?.fields?.journey_text) {
            // If CMS returns HTML (Rich Text)
            return <div dangerouslySetInnerHTML={{ __html: pageContent.fields.journey_text }} className="flex flex-col gap-4" />;
        }
        // Fallback for hardcoded string with newlines
        return content.journey_text.split('\n\n').map((para: string, idx: number) => (
            <p key={idx}>{para}</p>
        ));
    };


    return (
        <div className="flex flex-col items-center w-full flex-1">
            <section className="w-full max-w-7xl px-4 md:px-10 py-16 md:py-24">
                <div className="@container">
                    <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
                        <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-square rounded-3xl bg-center bg-cover shadow-lg" style={{ backgroundImage: `url('${content.hero_image}')` }}>
                        </div>
                        <div className="flex flex-col gap-6 md:w-1/2">
                            <div className="flex flex-col gap-4 text-left">
                                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl dark:text-white" dangerouslySetInnerHTML={{ __html: content.headline }}>
                                </h1>
                                <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                    {content.intro_text}
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
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">{content.philosophy_subhead}</span>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-[720px] dark:text-white">
                                {content.philosophy_headline}
                            </h2>
                            <p className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-[720px]">
                                {content.philosophy_intro}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-6 md:p-8 hover:shadow-md transition-shadow">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">star</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold dark:text-white">{content.pillar_1_title}</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark">
                                        {content.pillar_1_desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-6 md:p-8 hover:shadow-md transition-shadow">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">psychology</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold dark:text-white">{content.pillar_2_title}</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark">
                                        {content.pillar_2_desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-6 md:p-8 hover:shadow-md transition-shadow">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold dark:text-white">{content.pillar_3_title}</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark">
                                        {content.pillar_3_desc}
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
                        <div className="relative w-full aspect-[3/4] rounded-3xl bg-cover bg-center shadow-sm" style={{ backgroundImage: `url('${content.journey_image}')` }}>
                        </div>
                    </div>
                    <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-6">
                        <h2 className="text-3xl font-bold leading-tight dark:text-white">{content.journey_title}</h2>
                        <div className="flex flex-col gap-4 text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            {renderJourneyText()}
                            <p className="font-medium text-text-light dark:text-white pt-2">
                                {content.journey_mission}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-background-light dark:bg-background-dark py-20">
                <div className="max-w-3xl mx-auto px-4 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-10 text-center dark:text-white">{content.credentials_title}</h2>
                    <div className="relative border-l-2 border-primary/20 ml-3 md:ml-0 pl-8 md:pl-10 space-y-10">
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[49px] top-1 size-6 rounded-full bg-primary border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white">{content.cred_1_title}</h3>
                            <p className="text-sm text-primary font-medium mb-2">{content.cred_1_year}</p>
                            <p className="text-text-muted-light dark:text-text-muted-dark">{content.cred_1_desc}</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[49px] top-1 size-6 rounded-full bg-primary/40 border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white">{content.cred_2_title}</h3>
                            <p className="text-sm text-primary font-medium mb-2">{content.cred_2_year}</p>
                            <p className="text-text-muted-light dark:text-text-muted-dark">{content.cred_2_desc}</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[49px] top-1 size-6 rounded-full bg-primary/20 border-4 border-white dark:border-background-dark"></div>
                            <h3 className="text-xl font-bold text-text-light dark:text-white">{content.cred_3_title}</h3>
                            <p className="text-sm text-primary font-medium mb-2">{content.cred_3_year}</p>
                            <p className="text-text-muted-light dark:text-text-muted-dark">{content.cred_3_desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;