import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getContactPage, ContactPage } from '../src/lib/sanityQueries';
import { buildCanonical, buildOgImage, buildTitle, buildWebPageJsonLd, isHeadlessBrowser, toJsonLd } from '../src/lib/seo';

const Contact: React.FC = () => {
    const [pageContent, setPageContent] = useState<ContactPage | null>(null);

    useEffect(() => {
        if (isHeadlessBrowser()) return;
        let isMounted = true;
        const loadContent = async () => {
            try {
                const page = await getContactPage();
                if (isMounted) {
                    setPageContent(page);
                }
            } catch (error) {
                console.error('Failed to load contact page content', error);
            }
        };
        loadContent();
        return () => {
            isMounted = false;
        };
    }, []);

    const defaults = {
        title: "Let's Connect",
        subtitle: "Reaching out can be hard, but I'm here to help. Fill out the form below, and I'll get back to you within 48 hours.",
        form_subject: "New Contact Form Submission",
        form_email: "neurothrivecoach@gmail.com",
        direct_email: "info@neurothrivecoach.co.uk",
        pre_faq_title: "Before you ask...",
        pre_faq_body: "I've compiled a list of common questions about my coaching style, pricing, and insurance. Checking here first might save you time!",
        pre_faq_link_text: "View Frequently Asked Questions",
        privacy_title: "Privacy First",
        privacy_body: "Your information is safe. I am the only one who reads these emails, and I treat them with strict confidentiality."
    };

    const content = {
        ...defaults,
        form_email: defaults.form_email,
        title: pageContent?.heroHeading || defaults.title,
        subtitle: pageContent?.heroBody || defaults.subtitle,
        form_full_name_label: pageContent?.formFullNameLabel || 'Full Name',
        form_email_label: pageContent?.formEmailLabel || 'Email Address',
        form_message_label: pageContent?.formMessageLabel || 'Your Message',
        form_submit_label: pageContent?.formSubmitLabel || 'Submit Form',
        direct_email_heading: pageContent?.directEmailHeading || 'Direct Email',
        direct_email_body: pageContent?.directEmailBody || 'Prefer not to use forms?',
        direct_email: pageContent?.directEmailAddress || defaults.direct_email,
        pre_faq_title: pageContent?.faqBoxHeading || defaults.pre_faq_title,
        pre_faq_body: pageContent?.faqBoxBody || defaults.pre_faq_body,
        pre_faq_link_text: pageContent?.faqBoxLinkLabel || defaults.pre_faq_link_text,
        pre_faq_link_href: pageContent?.faqBoxLinkHref || '/services',
        privacy_title: pageContent?.privacyBoxHeading || defaults.privacy_title,
        privacy_body: pageContent?.privacyBoxBody || defaults.privacy_body,
    };
    const formAction = `https://formsubmit.co/${content.form_email || defaults.form_email}`;
    const faqLinkIsExternal = /^https?:\/\//i.test(content.pre_faq_link_href);

    const pageTitle = buildTitle(content.title);
    const pageDescription = content.subtitle;
    const canonicalUrl = buildCanonical('/contact');
    const ogImage = buildOgImage();
    const pageJsonLd = buildWebPageJsonLd({
        name: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        pageType: 'ContactPage',
    });

    return (
        <div className="flex-grow layout-container flex flex-col items-center py-8 md:py-12 px-4 md:px-10">
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
            </Helmet>
            <div className="layout-content-container flex flex-col max-w-[1080px] w-full flex-1 gap-10">
                {/* Header Section */}
                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-[#111518] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                        {content.title}
                    </h1>
                    <p className="text-[#637c88] dark:text-slate-400 text-lg font-normal leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start mt-4">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-2/3 bg-white dark:bg-[#1a262d] p-6 md:p-10 rounded-3xl shadow-sm">
                        <form 
                            target="_blank" 
                            action={formAction}
                            method="POST"
                            className="flex flex-col gap-6"
                        >
                            {/* Hidden Configuration Fields for FormSubmit */}
                            <input type="hidden" name="_subject" value={content.form_subject} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="flex flex-col md:flex-row gap-6">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#111518] dark:text-white text-base font-medium leading-normal pb-2">{content.form_full_name_label}</p>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] dark:text-white bg-background-light dark:bg-[#111c21] border-none h-14 placeholder:text-[#637c88] p-[15px] text-base font-normal leading-normal transition-all focus:ring-2 focus:ring-primary shadow-inner" 
                                        placeholder={content.form_full_name_label} 
                                        required 
                                    />
                                </label>
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#111518] dark:text-white text-base font-medium leading-normal pb-2">{content.form_email_label}</p>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] dark:text-white bg-background-light dark:bg-[#111c21] border-none h-14 placeholder:text-[#637c88] p-[15px] text-base font-normal leading-normal transition-all focus:ring-2 focus:ring-primary shadow-inner" 
                                        placeholder={content.form_email_label} 
                                        required 
                                    />
                                </label>
                            </div>

                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#111518] dark:text-white text-base font-medium leading-normal pb-2">{content.form_message_label}</p>
                                <textarea 
                                    name="message" 
                                    className="form-textarea flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-[#111518] dark:text-white bg-background-light dark:bg-[#111c21] border-none placeholder:text-[#637c88] p-[15px] text-base font-normal leading-normal transition-all resize-y focus:ring-2 focus:ring-primary shadow-inner" 
                                    placeholder={content.form_message_label} 
                                    rows={10} 
                                    required
                                ></textarea>
                            </label>

                            <div className="pt-2">
                                <button 
                                    type="submit" 
                                    className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-lg shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                                >
                                    {content.form_submit_label}
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
                                <p className="font-bold text-[#111518] dark:text-white">{content.direct_email_heading}</p>
                            </div>
                            <p className="text-sm text-[#637c88] dark:text-slate-400">{content.direct_email_body}</p>
                            <a className="text-primary font-medium hover:underline break-all" href={`mailto:${content.direct_email}`}>{content.direct_email}</a>
                        </div>

                        <div className="flex flex-col gap-4 p-6">
                            <h3 className="text-xl font-bold text-[#111518] dark:text-white">{content.pre_faq_title}</h3>
                            <p className="text-[#637c88] dark:text-slate-400 leading-relaxed">
                                {content.pre_faq_body}
                            </p>
                            {faqLinkIsExternal ? (
                                <a href={content.pre_faq_link_href} className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" rel="noreferrer">
                                    {content.pre_faq_link_text}
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            ) : (
                                <Link to={content.pre_faq_link_href} className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                    {content.pre_faq_link_text}
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            )}
                        </div>
                        <div className="p-6 bg-primary/5 dark:bg-primary/10 rounded-3xl">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                                <div>
                                    <h4 className="font-bold text-[#111518] dark:text-white mb-1">{content.privacy_title}</h4>
                                    <p className="text-sm text-[#637c88] dark:text-slate-400">
                                        {content.privacy_body}
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
