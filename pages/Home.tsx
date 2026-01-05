import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCollections, fetchPageWithFallback } from '../utils/buttercms';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [pageContent, setPageContent] = useState<any>(null);
    const [servicesItems, setServicesItems] = useState<any[]>([]);
    const [testimonials, setTestimonials] = useState<any[]>([]);

    useEffect(() => {
        const fetchHomeContent = async () => {
            try {
                const page = await fetchPageWithFallback(['home', 'landing_page', 'page'], 'home');
                if (page) {
                    setPageContent(page);
                }
            } catch (error) {
                console.log("Could not fetch Home content from ButterCMS, using default.", error);
            }
        };

        fetchHomeContent();
    }, []);

    useEffect(() => {
        const fetchHomeCollections = async () => {
            const collections = await fetchCollections(['services', 'testimonials']);
            if (collections?.services?.length) {
                setServicesItems(collections.services);
            }
            if (collections?.testimonials?.length) {
                setTestimonials(collections.testimonials);
            }
        };

        fetchHomeCollections();
    }, []);

    const handleBooking = () => {
        navigate('/services');
    };

    // Default content (Fallback)
    const defaults = {
        hero_headline: "Master Your Mind, Embrace Your Potential.",
        hero_subheadline: "Professional ADHD coaching designed to help you organize your life, focus on what matters, and thrive without the overwhelm.",
        hero_cta_text: "Book a Free Discovery Session",
        hero_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATS94RA8zMNUEvLKWCK7k_qNJ26Cdt9BWNfrrMcHtD71-8INm-VwAg-p8HvWRSDkk3pdG4lt7CjBOgKscm0lbRs7ms4CfVapYkZ66M446mTip8m9W6RkthAkd4sNoZwanfXEhO-2cPsCN712eEMzySXjCyg3n1rYSik-SpZ5DrHpjjb02r4Y8XSxY7RR1J-3eEnOOAMuqi2nJvnaOYftCgKPhOZ59Iy8sUPFJ_wGmCnbQZgJmRQYp8mWpn-o_bNPrF5mBuJRoSqHs",

        intro_headline: "How I Can Help",
        intro_text: "Specialized support tailored to your unique brain wiring, focusing on strategies that stick.",

        service_1_title: "Executive Function",
        service_1_desc: "Build systems that work with your brain, not against it. Master planning and initiation.",
        service_2_title: "Time Management",
        service_2_desc: "Practical strategies to manage your schedule, overcome time blindness, and meet deadlines.",
        service_3_title: "Emotional Regulation",
        service_3_desc: "Tools to navigate intensity, reduce rejection sensitivity, and find your calm center.",

        clients_headline: "Client Stories",
        client_1_name: "Sarah M.",
        client_1_quote: "This coaching changed my life. The strategies are practical, and for the first time, I feel understood. The simple approach really works for my ADHD brain.",
        client_1_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqmHMzne3kfowehf8ufPz4i4smHt-XduVGO3v__J_DfYPFyoQ8qpHJy83t9eAUwHOrvNuvK5ypzYKOMQB-wDMiao0ShCrVu5KxAnOGqP5YJPxS7QXRFlttFRODKE6QUKHzVpqBYPDSf8rKUxoMq92wsjiqB55IthEH4kEj86_jInUrK1DLm8aDHcIGZhki-W6F5o2Tyw3AWRC6kybxOx4mDr7TLJXTx8ap1Wg3IbezrR73-EocIibo2vHozg8TOIeQB7QgUzZM-4A",

        client_2_name: "James T.",
        client_2_quote: "I never thought I could be this organized. The body doubling sessions helped me clear a backlog of work I'd been avoiding for months. Highly recommended!",
        client_2_image: "https://i.pravatar.cc/150?img=11",

        client_3_name: "Elena R.",
        client_3_quote: "Alex gets it. No judgment, just real solutions. I've learned to work with my energy levels instead of fighting them, and my anxiety has dropped significantly.",
        client_3_image: "https://i.pravatar.cc/150?img=5"
    };

    // Merge defaults with pageContent fields to ensure all required fields exist
    const content = { ...defaults, ...(pageContent?.fields || {}) };

    // Optional: Show a loading spinner if you want to wait for CMS before showing anything.
    // For better UX, we might just show the default immediately while loading, or a skeleton.
    // Here we'll just render. If 'loading' is true, content might replace defaults quickly.
    // To prevent layout shift, we can use the 'loading' state if desired.
    // For now, we render using 'content' which defaults to hardcoded values if not found.

    const defaultServices = [
        { title: content.service_1_title, desc: content.service_1_desc, icon: 'psychology' },
        { title: content.service_2_title, desc: content.service_2_desc, icon: 'schedule' },
        { title: content.service_3_title, desc: content.service_3_desc, icon: 'self_improvement' }
    ];

    const servicesCards = servicesItems.length
        ? servicesItems.slice(0, 3).map((item: any, idx: number) => ({
            title: item.title || item.name || defaultServices[idx]?.title || '',
            desc: item.description || item.body || item.content || defaultServices[idx]?.desc || '',
            icon: item.icon || defaultServices[idx]?.icon || 'psychology'
        }))
        : defaultServices;

    const defaultTestimonials = [
        { client_name: content.client_1_name, rating: 5, image: content.client_1_image, quote: content.client_1_quote },
        { client_name: content.client_2_name, rating: 5, image: content.client_2_image, quote: content.client_2_quote },
        { client_name: content.client_3_name, rating: 5, image: content.client_3_image, quote: content.client_3_quote }
    ];
    const testimonialItems = testimonials.length ? testimonials : defaultTestimonials;

    const getImageUrl = (value: any) => {
        if (!value) return '';
        if (typeof value === 'string') return value;
        return value.url || value.src || '';
    };

    return (
        <>
            <section className="w-full max-w-[1280px] px-4 md:px-10 py-12 md:py-20">
                <div className="@container">
                    <div className="flex flex-col-reverse gap-10 md:gap-16 md:flex-row items-center">
                        <div className="flex flex-col gap-6 flex-1 text-left items-start max-w-[600px]">
                            <h1 className="text-text-main dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                                {content.hero_headline}
                            </h1>
                            <h2 className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                                {content.hero_subheadline}
                            </h2>
                            <div className="pt-2">
                                <button onClick={handleBooking} className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-base font-bold leading-normal shadow-lg shadow-primary/20">
                                    <span className="truncate">{content.hero_cta_text}</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div aria-label="Calm and organized workspace with natural light" className="w-full max-w-[500px] aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden relative shadow-xl" role="img" style={{ backgroundImage: `url('${content.hero_image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white dark:bg-[#162228] py-16 md:py-24">
                <div className="w-full max-w-[1280px] px-4 md:px-10 mx-auto">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4 max-w-[720px]">
                            <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                                {content.intro_headline}
                            </h2>
                            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                                {content.intro_text}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {servicesCards.map((item, idx) => (
                                <div key={`${item.title}-${idx}`} className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <span className="material-symbols-outlined text-[28px]">{item.icon || 'psychology'}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">{item.title}</h3>
                                        <p className="text-text-muted dark:text-gray-400 text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-24">
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary">format_quote</span>
                        <h2 className="text-text-main dark:text-white text-2xl font-bold">{content.clients_headline}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonialItems.slice(0, 3).map((item: any, idx: number) => {
                            const rating = Number.parseInt(item.rating, 10) || 5;
                            const imageUrl = getImageUrl(item.image);
                            const quote =
                                item.quote ||
                                item.testimonial ||
                                item.content ||
                                item.body ||
                                item.description ||
                                defaultTestimonials[idx]?.quote ||
                                '';
                            return (
                                <div key={`${item.client_name || item.name}-${idx}`} className="bg-white dark:bg-[#162228] p-8 rounded-3xl shadow-sm h-full hover:shadow-md transition-all">
                                    <div className="flex flex-col gap-6 h-full">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-14 shadow-inner shrink-0" style={{ backgroundImage: `url('${imageUrl}')` }}>
                                            </div>
                                            <div>
                                                <p className="text-text-main dark:text-white text-lg font-bold leading-normal">{item.client_name || item.name}</p>
                                                <div className="flex gap-0.5 text-[#F59E0B]">
                                                    {[...Array(Math.max(rating, 1))].map((_, i) => (
                                                        <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <blockquote className="text-text-main dark:text-gray-200 text-lg md:text-xl italic font-medium leading-relaxed">
                                            "{quote}"
                                        </blockquote>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
