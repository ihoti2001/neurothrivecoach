import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { buildCanonical, buildFaqJsonLd, buildOgImage, buildTitle, buildWebPageJsonLd, isHeadlessBrowser, toJsonLd } from '../src/lib/seo';
import { getGroupCoachingPage, GroupCoachingPage } from '../src/lib/sanityQueries';

const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

const getImageUrl = (value: any) => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (value?.asset?.url) return value.asset.url;
    return value.url || value.src || '';
};

const GroupCoaching: React.FC = () => {
    const [pageContent, setPageContent] = useState<GroupCoachingPage | null>(null);

    useEffect(() => {
        if (isHeadlessBrowser()) return;
        let isMounted = true;
        const loadContent = async () => {
            try {
                const page = await getGroupCoachingPage();
                if (isMounted) {
                    setPageContent(page);
                }
            } catch (error) {
                console.error('Failed to load group coaching page content', error);
            }
        };
        loadContent();
        return () => {
            isMounted = false;
        };
    }, []);

    const defaults = {
        heading: 'Group Coaching',
        intro: 'Small, focused ADHD coaching groups for people who may not know each other yet, built for support and momentum.',
        hero_image: '',
        group_heading: 'Group sessions for ADHD support',
        group_body: 'Join a small, guided group to build skills, share strategies, and stay accountable. Sessions are welcoming, structured, and practical.',
        group_min_size: 5,
        group_max_size: 10,
        group_highlights: [
            'Structured sessions with clear outcomes',
            'Peer accountability and shared learning',
            'Tailored prompts and exercises',
            'Safe, confidential space',
        ],
        delivery_heading: 'Delivery options',
        delivery_options: [
            { title: 'Online groups', body: 'Live sessions via Google Meet for clients across the UK.' },
            { title: 'In-person groups', body: 'Available within 25 miles of Canterbury, Kent.' },
            { title: 'Hybrid and accessibility', body: 'We can adapt formats to suit access needs or mixed teams.' },
        ],
        corporate_heading: 'Corporate coaching packages',
        corporate_body: 'Support neurodiverse staff with group coaching, workshops, and leadership support designed for your organization.',
        corporate_highlights: [
            'No limit on attendee numbers for corporate groups',
            'Custom workshop themes and goals',
            'Manager and leadership coaching add-ons',
            'Ongoing support options for teams',
        ],
        cta_label: 'Enquire about Group Coaching',
        cta_href: '/contact',
        faq_heading: 'Frequently Asked Questions',
        faq_items: [
            {
                question: 'Do I need a diagnosis to join a group?',
                answer: 'No. Groups are open to anyone who identifies with ADHD traits or neurodivergent thinking.',
            },
            {
                question: 'How are groups formed?',
                answer: 'We match by goals, availability, and format preferences when possible.',
            },
            {
                question: 'Can I bring a colleague to a corporate group?',
                answer: 'Yes. Corporate sessions can include any number of staff members.',
            },
        ],
    };

    const content = {
        heading: pageContent?.heading || defaults.heading,
        intro: pageContent?.intro || defaults.intro,
        hero_image: getImageUrl(pageContent?.heroImage) || defaults.hero_image,
        group_heading: pageContent?.groupHeading || defaults.group_heading,
        group_body: pageContent?.groupBody || defaults.group_body,
        group_min_size: pageContent?.groupMinSize ?? defaults.group_min_size,
        group_max_size: pageContent?.groupMaxSize ?? defaults.group_max_size,
        group_highlights: pageContent?.groupHighlights?.length ? pageContent.groupHighlights : defaults.group_highlights,
        delivery_heading: pageContent?.deliveryHeading || defaults.delivery_heading,
        delivery_options: pageContent?.deliveryOptions?.length
            ? pageContent.deliveryOptions.map((option) => ({
                title: option.title,
                body: option.body,
            }))
            : defaults.delivery_options,
        corporate_heading: pageContent?.corporateHeading || defaults.corporate_heading,
        corporate_body: pageContent?.corporateBody || defaults.corporate_body,
        corporate_highlights: pageContent?.corporateHighlights?.length
            ? pageContent.corporateHighlights
            : defaults.corporate_highlights,
        cta_label: pageContent?.ctaLabel || defaults.cta_label,
        cta_href: pageContent?.ctaHref || defaults.cta_href,
        faq_heading: pageContent?.faqHeading || defaults.faq_heading,
    };

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
        : defaults.faq_items;

    const faqJsonLd = buildFaqJsonLd(faqItems);
    const pageTitle = buildTitle(content.heading);
    const pageDescription = content.intro;
    const canonicalUrl = buildCanonical('/group-coaching');
    const ogImage = buildOgImage(content.hero_image || undefined);
    const pageJsonLd = buildWebPageJsonLd({
        name: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        pageType: 'WebPage',
    });

    const detailCards = [
        { label: 'Minimum group size', value: `${content.group_min_size} people` },
        { label: 'Maximum group size', value: `${content.group_max_size} people` },
        { label: 'Format', value: 'Online or in-person' },
    ];

    const ctaIsExternal = isExternalLink(content.cta_href);
    const ctaButton = content.cta_label && content.cta_href ? (
        ctaIsExternal ? (
            <a
                href={content.cta_href}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-white font-bold text-base shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                rel="noreferrer"
            >
                {content.cta_label}
            </a>
        ) : (
            <Link
                to={content.cta_href}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-white font-bold text-base shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
            >
                {content.cta_label}
            </Link>
        )
    ) : null;

    return (
        <div className="w-full bg-background-light dark:bg-background-dark text-text-main dark:text-white font-sans">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={ogImage} />
                <script type="application/ld+json">{toJsonLd(pageJsonLd)}</script>
                {faqJsonLd ? (
                    <script type="application/ld+json">{toJsonLd(faqJsonLd)}</script>
                ) : null}
            </Helmet>

            <section className="w-full px-4 md:px-10 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl md:text-5xl font-black text-[#111518] dark:text-white tracking-tight">
                            {content.heading}
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {content.intro}
                        </p>
                        {ctaButton}
                    </div>
                    {content.hero_image ? (
                        <div className="w-full">
                            <div
                                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800"
                                style={{
                                    backgroundImage: `url('${content.hero_image}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                role="img"
                                aria-label="Group coaching session"
                            />
                        </div>
                    ) : null}
                </div>
            </section>

            <section className="w-full bg-white dark:bg-[#162228] py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-10">
                    <div className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-background-light/60 dark:bg-background-dark/60 p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
                            <div className="space-y-6">
                                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                    Group coaching
                                </div>
                                <h2 className="text-3xl font-bold text-[#111518] dark:text-white">
                                    {content.group_heading}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {content.group_body}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {content.group_highlights.map((item, idx) => (
                                        <li key={`${item}-${idx}`} className="flex gap-3 text-sm text-gray-700 dark:text-gray-200">
                                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm space-y-6">
                                <div className="grid grid-cols-1 gap-5">
                                    {detailCards.map((card) => (
                                        <div key={card.label} className="flex items-center justify-between gap-6">
                                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{card.label}</p>
                                            <p className="text-lg font-bold text-[#111518] dark:text-white">{card.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-px bg-gray-100 dark:bg-gray-800"></div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Groups stay intentionally small to keep sessions focused and supportive. Corporate sessions can scale to fit your team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-10">
                    <h2 className="text-3xl font-bold text-center text-[#111518] dark:text-white mb-10">
                        {content.delivery_heading}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.delivery_options.map((option, idx) => (
                            <div key={`${option.title}-${idx}`} className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="text-lg font-bold text-[#111518] dark:text-white mb-2">{option.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{option.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-white dark:bg-[#162228] py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-[#111518] dark:text-white mb-4">
                                {content.corporate_heading}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {content.corporate_body}
                            </p>
                        </div>
                        <div className="bg-background-light dark:bg-background-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                            <ul className="space-y-3">
                                {content.corporate_highlights.map((item, idx) => (
                                    <li key={`${item}-${idx}`} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16">
                <div className="max-w-4xl mx-auto px-4 md:px-10 text-center">
                    <h2 className="text-3xl font-bold text-[#111518] dark:text-white mb-4">Ready to get started?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        Share a little about your goals and we will recommend the right group or corporate package.
                    </p>
                    {ctaButton}
                </div>
            </section>

            <section id="faq" className="max-w-4xl mx-auto px-4 md:px-10 pb-20">
                <h2 className="text-3xl font-bold text-center mb-10 text-[#111518] dark:text-white">{content.faq_heading}</h2>
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
            </section>
        </div>
    );
};

export default GroupCoaching;
