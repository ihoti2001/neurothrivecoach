import React, { useEffect, useState } from 'react';
import { buildBookingUrl, getServicesPage, getSiteSettings, ServicesPage, SiteSettings } from '../src/lib/sanityQueries';

const Services: React.FC = () => {
    const [modalUrl, setModalUrl] = useState<string | null>(null);
    const [pageContent, setPageContent] = useState<ServicesPage | null>(null);
    const [settings, setSettings] = useState<SiteSettings | null>(null);

    useEffect(() => {
        let isMounted = true;
        const loadContent = async () => {
            try {
                const [page, siteSettings] = await Promise.all([getServicesPage(), getSiteSettings()]);
                if (isMounted) {
                    setPageContent(page);
                    setSettings(siteSettings);
                }
            } catch (error) {
                console.error('Failed to load services page content', error);
            }
        };
        loadContent();
        return () => {
            isMounted = false;
        };
    }, []);

    const fallbackBookingUrls = [
        'https://app.cal.eu/neurothrivecoach/25min?overlayCalendar=true',
        'https://app.cal.eu/neurothrivecoach/45min?overlayCalendar=true',
        'https://app.cal.eu/neurothrivecoach/4-session-package?recurringEventCount=4&overlayCalendar=true',
        'https://app.cal.eu/neurothrivecoach/6-session-package?recurringEventCount=4&overlayCalendar=true',
    ];

    const defaults = {
        title: "Services & Pricing",
        subtitle: "Flexible ADHD coaching options to support your journey. Start with a free consultation, then choose what works best for you.",

        // Discovery Call
        service_1_title: "Free Discovery Call",
        service_1_price: "FREE",
        service_1_duration: "15 minutes",
        service_1_features: "Get to know each other\nDiscuss your goals and challenges\nLearn about my coaching approach\nAsk any questions you have\nNo obligation to continue",
        service_1_button: "Book Now",

        // Single Session
        service_2_title: "Single Session",
        service_2_price: "£75",
        service_2_duration: "per 45-min session",
        service_2_features: "Focused 45-minute coaching session\nPersonalised strategies and tools\nAction plan for immediate implementation\nOnline via Google Meet\nOptional in-person (Canterbury area)\nFlexible scheduling",
        service_2_button: "Book Now",

        // 4-Session Package
        service_3_title: "4-Session Package",
        service_3_price_old: "£300",
        service_3_price: "£280",
        service_3_price_detail: "£70 per session",
        service_3_features: "Save £20 on individual sessions\nFour 45-minute coaching sessions\nComprehensive progress tracking\nEmail support between sessions\nWorkbooks and resources included\nValid for 3 months",
        service_3_button: "Book Now",

        // 6-Session Package
        service_4_badge: "Best Value",
        service_4_title: "6-Session Package",
        service_4_price_old: "£450",
        service_4_price: "£420",
        service_4_price_detail: "£70 per session",
        service_4_features: "Best value - Save £30\nSix 45-minute coaching sessions\nIn-depth transformation programme\nPriority email support\nCustom resources and toolkits\nValid for 4 months",
        service_4_button: "Book Now",

        banner_text: "<span class=\"font-bold\">Not sure which option is right for you?</span> Book a free discovery call and we'll discuss the best path forward.",

        expect_title: "What to Expect in Your Sessions",
        expect_intro: "Every coaching session is tailored to your unique needs and goals.",

        expect_1_title: "1. Check-In & Goal Setting (5-10 mins)",
        expect_1_text: "We start each session by reviewing progress since our last meeting and setting intentions for today's focus.",

        expect_2_title: "2. Exploration & Strategy Development (25-30 mins)",
        expect_2_text: "The heart of our work together. We explore challenges, celebrate wins, and develop practical strategies tailored to your ADHD brain and lifestyle.",

        expect_3_title: "3. Action Planning & Commitment (5-10 mins)",
        expect_3_text: "We wrap up with a clear action plan—specific, achievable steps you'll take before our next session.",

        delivery_title: "Session Delivery Options",
        delivery_intro: "Choose the format that works best for your lifestyle and preferences.",

        delivery_1_title: "Online Sessions",
        delivery_1_text: "Available to clients across the UK via Google Meet. All you need is a computer or smartphone with internet connection.",

        delivery_2_title: "In-Person Sessions",
        delivery_2_text: "Available within 25 miles of Canterbury, Kent. Meet in a comfortable, confidential setting at a mutually convenient location.",

        delivery_3_title: "Flexible Scheduling",
        delivery_3_text: "Evening and weekend appointments available to accommodate work schedules and family commitments.",

        delivery_4_title: "Confidential & Safe",
        delivery_4_text: "Your privacy is paramount. All sessions are completely confidential and conducted in a judgment-free environment.",

        benefit_title: "Who Can Benefit from Coaching?",

        benefit_1_title: "Adults with ADHD",
        benefit_1_list: "Struggling with time management and organization\nRecently diagnosed and seeking support\nManaging work/life balance challenges\nBuilding sustainable routines and habits\nNavigating relationships and communication",

        benefit_2_title: "Parents of Neurodivergent Children",
        benefit_2_list: "Supporting children with ADHD or autism\nUnderstanding neurodivergent needs\nNavigating school systems and accommodations\nManaging challenging behaviours with compassion\nBuilding strong family relationships",

        faq_title: "Frequently Asked Questions",

        faq_1_q: "Do I need a formal ADHD diagnosis to work with you?",
        faq_1_a: "No. While many of my clients have a formal diagnosis, coaching can benefit anyone who identifies with ADHD traits or neurodivergent thinking patterns.",

        faq_2_q: "How is coaching different from therapy?",
        faq_2_a: "Coaching focuses on the present and future—setting goals, developing strategies, and creating action plans. Therapy typically explores past experiences and mental health treatment. Both are valuable, and can complement each other.",

        faq_3_q: "How many sessions will I need?",
        faq_3_a: "This varies by individual. Some clients achieve their goals in 4-6 sessions, while others prefer ongoing support. We'll discuss what's right for you during your free consultation.",

        faq_4_q: "What's your cancellation policy?",
        faq_4_a: "Please provide at least 24 hours notice to cancel or reschedule. Cancellations with less than 24 hours notice will be charged at the full session rate."
    };

    // Merge defaults with pageContent fields to ensure all required fields exist
    const content = {
        ...defaults,
        title: pageContent?.heading || defaults.title,
        subtitle: pageContent?.intro || defaults.subtitle,
        banner_text: pageContent?.undecidedText || defaults.banner_text,
        expect_title: pageContent?.expectHeading || defaults.expect_title,
        delivery_title: pageContent?.deliveryHeading || defaults.delivery_title,
        benefit_title: pageContent?.benefitHeading || defaults.benefit_title,
        faq_title: pageContent?.faqHeading || defaults.faq_title,
    };

    const defaultPricing = [
        {
            title: content.service_1_title,
            price: content.service_1_price,
            duration: content.service_1_duration,
            features: content.service_1_features,
            cta_text: content.service_1_button,
            is_featured: false
        },
        {
            title: content.service_2_title,
            price: content.service_2_price,
            duration: content.service_2_duration,
            features: content.service_2_features,
            cta_text: content.service_2_button,
            is_featured: false
        },
        {
            title: content.service_3_title,
            price: content.service_3_price,
            price_old: content.service_3_price_old,
            price_detail: content.service_3_price_detail,
            features: content.service_3_features,
            cta_text: content.service_3_button,
            is_featured: false
        },
        {
            title: content.service_4_title,
            price: content.service_4_price,
            price_old: content.service_4_price_old,
            price_detail: content.service_4_price_detail,
            features: content.service_4_features,
            cta_text: content.service_4_button,
            badge: content.service_4_badge,
            is_featured: true
        }
    ];

    const pricingItems = pageContent?.packages?.length
        ? pageContent.packages.map((pkg, idx) => ({
            title: pkg.title,
            price: pkg.price,
            price_old: pkg.oldPrice,
            duration: pkg.duration,
            badge: pkg.badge,
            features: pkg.bullets || [],
            cta_text: pkg.ctaLabel,
            booking_url: buildBookingUrl(settings, pkg.bookingPath) || fallbackBookingUrls[idx] || fallbackBookingUrls[0],
            is_featured: !!pkg.badge,
        }))
        : defaultPricing.map((item, idx) => ({
            ...item,
            booking_url: fallbackBookingUrls[idx] || fallbackBookingUrls[0],
        }));

    const sessionSteps = pageContent?.expectSteps?.length
        ? pageContent.expectSteps.map((step) => ({
            title: step.title,
            description: step.body,
        }))
        : [
            { title: content.expect_1_title, description: content.expect_1_text },
            { title: content.expect_2_title, description: content.expect_2_text },
            { title: content.expect_3_title, description: content.expect_3_text },
        ];

    const deliveryIcons = ['videocam', 'location_on', 'schedule', 'security'];
    const deliveryItems = pageContent?.deliveryOptions?.length
        ? pageContent.deliveryOptions.map((option, idx) => ({
            title: option.title,
            description: option.body,
            icon: deliveryIcons[idx % deliveryIcons.length],
        }))
        : [
            { title: content.delivery_1_title, description: content.delivery_1_text, icon: deliveryIcons[0] },
            { title: content.delivery_2_title, description: content.delivery_2_text, icon: deliveryIcons[1] },
            { title: content.delivery_3_title, description: content.delivery_3_text, icon: deliveryIcons[2] },
            { title: content.delivery_4_title, description: content.delivery_4_text, icon: deliveryIcons[3] },
        ];

    const portableTextToString = (value: any) => {
        if (!value) return '';
        if (typeof value === 'string') return value;
        if (Array.isArray(value)) {
            return value
                .map((block) => {
                    if (typeof block === 'string') return block;
                    if (block?.children?.length) {
                        return block.children.map((child: any) => child?.text || '').join('');
                    }
                    return '';
                })
                .filter((item) => item)
                .join('\n\n');
        }
        return '';
    };

    const faqItems = pageContent?.faqs?.length
        ? pageContent.faqs.map((item) => ({
            question: item.question,
            answer: portableTextToString(item.answer),
        }))
        : [
            { question: content.faq_1_q, answer: content.faq_1_a },
            { question: content.faq_2_q, answer: content.faq_2_a },
            { question: content.faq_3_q, answer: content.faq_3_a },
            { question: content.faq_4_q, answer: content.faq_4_a },
        ];

    const benefitGroups = pageContent?.benefitGroups?.length
        ? pageContent.benefitGroups
        : [
            { title: content.benefit_1_title, bullets: content.benefit_1_list.split('\n') },
            { title: content.benefit_2_title, bullets: content.benefit_2_list.split('\n') },
        ];

    const normalizeList = (value: string | string[]) => {
        if (Array.isArray(value)) return value.filter((item) => item.trim() !== '');
        if (!value || typeof value !== 'string') return [];
        return value.split('\n').filter(item => item.trim() !== '');
    };

    const renderList = (value: string | string[]) => {
        const items = normalizeList(value);
        if (!items.length) return null;
        return items.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                <span>{item}</span>
            </li>
        ));
    };

    const renderBenefitList = (value: string | string[]) => {
        const items = normalizeList(value);
        if (!items.length) return null;
        return items.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-[#ccfbf1] text-[20px] shrink-0 font-bold bg-white rounded-full">check</span>
                <span>{item}</span>
            </li>
        ));
    };

    return (
        <div className="w-full bg-background-light dark:bg-background-dark text-text-main dark:text-white font-sans">

            {/* Header Section */}
            <div className="w-full pt-16 pb-12 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#111518] dark:text-white tracking-tight">
                    {content.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {content.subtitle}
                </p>
            </div>

            {/* Pricing Cards Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {pricingItems.map((item: any, idx: number) => {
                        const isFeatured = !!item.is_featured || !!item.featured || !!item.badge;
                        const priceOld = item.price_old || item.old_price || '';
                        const priceDetail = item.price_detail || '';
                        const badgeText = item.badge || (isFeatured ? 'Best Value' : '');
                        const ctaUrl = item.booking_url || fallbackBookingUrls[idx] || fallbackBookingUrls[0];
                        const cardClass = isFeatured
                            ? "bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-md border-2 border-primary/20 flex flex-col h-full relative transform lg:-translate-y-2"
                            : "bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col h-full hover:shadow-md transition-shadow";
                        const buttonClass = isFeatured
                            ? "w-full py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-colors shadow-sm"
                            : "w-full py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-bold text-[#111518] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors";

                        return (
                            <div key={`${item.title || item.name}-${idx}`} className={cardClass}>
                                {badgeText ? (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ccfbf1] text-primary-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {badgeText}
                                    </div>
                                ) : null}
                                <h3 className="font-bold text-xl mb-2 text-[#111518] dark:text-white">{item.title || item.name}</h3>
                                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                                    {priceOld ? (
                                        <span className="text-sm text-gray-400 line-through">{priceOld}</span>
                                    ) : null}
                                    <span className="text-3xl font-black text-primary">{item.price || ''}</span>
                                    {item.duration ? (
                                        <span className="text-sm text-gray-500 font-medium">{item.duration}</span>
                                    ) : null}
                                    {priceDetail ? (
                                        <span className="text-sm text-gray-500 font-medium">{priceDetail}</span>
                                    ) : null}
                                </div>
                                <div className="h-px bg-gray-100 dark:bg-gray-800 w-full my-4"></div>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {renderList(item.features || item.description || '')}
                                </ul>
                                <button onClick={() => setModalUrl(ctaUrl)} className={buttonClass}>
                                    {item.cta_text || item.button || 'Book Now'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Banner */}
            <div className="bg-gray-50 dark:bg-[#1a262d] py-6 px-4 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: content.banner_text }}>
                    </p>
                </div>
            </div>

            {/* What to Expect */}
            <div className="max-w-3xl mx-auto px-4 mb-24">
                <h2 className="text-3xl font-bold text-center mb-4 text-[#111518] dark:text-white">{content.expect_title}</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10">{content.expect_intro}</p>

                <div className="space-y-4">
                    {sessionSteps.map((item: any, idx: number) => {
                        const stepNumber = item.step_number || item.step || '';
                        const duration = item.duration ? ` (${item.duration})` : '';
                        const title = item.title || item.heading || (stepNumber ? `${stepNumber}. Session Step${duration}` : `Session Step${duration}`);
                        const description = item.description || item.body || item.content || item.text || '';
                        return (
                            <div key={`${title}-${idx}`} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="font-bold text-lg mb-2 text-[#111518] dark:text-white">{title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Delivery Options */}
            <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
                <h2 className="text-3xl font-bold mb-4 text-[#111518] dark:text-white">{content.delivery_title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-12">{content.delivery_intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {deliveryItems.map((item, idx) => (
                        <div key={`${item.title}-${idx}`} className="flex flex-col items-center gap-3">
                            <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                            </div>
                            <h3 className="font-bold text-lg text-[#111518] dark:text-white">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[250px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Who Can Benefit */}
            <div className="w-full bg-background-light dark:bg-background-dark pb-24">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#111518] dark:text-white">{content.benefit_title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefitGroups.map((group, idx) => (
                            <div key={`${group.title}-${idx}`} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold text-primary mb-6">{group.title}</h3>
                                <ul className="space-y-4">
                                    {renderBenefitList(group.bullets || [])}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="max-w-4xl mx-auto px-4 pb-24">
                <h2 className="text-3xl font-bold text-center mb-10 text-[#111518] dark:text-white">{content.faq_title}</h2>
                <div className="flex flex-col gap-4">
                    {faqItems.map((item, idx) => (
                        <details key={`${item.question}-${idx}`} className="group bg-white dark:bg-surface-dark rounded-xl border-l-4 border-transparent open:border-primary p-2 transition-all duration-200">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-[#111518] dark:text-white select-none">
                                <span>{item.question}</span>
                                <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            {modalUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white dark:bg-surface-dark rounded-lg shadow-lg">
                        <button
                            onClick={() => setModalUrl(null)}
                            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 text-2xl"
                        >
                            X
                        </button>
                        <iframe
                            src={modalUrl}
                            className="w-full h-full rounded-lg"
                            title="Book Session"
                        />
                    </div>
                </div>
            )}

        </div>
    );
};

export default Services;
