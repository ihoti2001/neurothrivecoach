import React from 'react';
import { Helmet } from 'react-helmet-async';
import { buildCanonical, buildOgImage, buildTitle } from '../src/lib/seo';

const PrivacyPolicy: React.FC = () => {
    const pageTitle = buildTitle('Privacy Policy');
    const pageDescription = 'Read the Neuro Thrive Coach privacy policy and how we handle personal data.';
    const canonicalUrl = buildCanonical('/privacy-policy');
    const ogImage = buildOgImage();

    return (
        <div className="flex-grow layout-container flex flex-col items-center py-12 md:py-20 px-4 md:px-10">
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
            </Helmet>
            <div className="max-w-4xl w-full flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#111518] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                        Privacy Policy
                    </h1>
                    <p className="text-[#637c88] dark:text-slate-400 text-lg">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-[#111518] dark:text-gray-300">
                    <p>
                        At Neuro Thrive Coach ("we", "us", or "our"), we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@neurothrivecoach.co.uk.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">1. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website (such as booking a session or filling out a contact form) or otherwise when you contact us.
                    </p>
                    <p>
                        The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Names</li>
                        <li>Email addresses</li>
                        <li>Phone numbers</li>
                        <li>Billing addresses (processed securely by our payment processors)</li>
                        <li>Debit/credit card numbers (processed securely by our payment processors)</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">2. How We Use Your Information</h2>
                    <p>
                        We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you marketing and promotional communications (you can opt-out at any time).</li>
                        <li>To fulfill and manage your orders and bookings.</li>
                        <li>To request feedback.</li>
                        <li>To protect our Services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">3. Cookies and Tracking Technologies</h2>
                    <p>
                        We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Cookies help us understand how you use our website, improve user experience, and ensure the website functions correctly. By using our website, you agree to the use of cookies.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">4. Your Privacy Rights (GDPR)</h2>
                    <p>
                        In some regions (like the European Economic Area and United Kingdom), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">5. Third-Party Services</h2>
                    <p>
                        We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Payment processing (e.g., Stripe)</li>
                        <li>Scheduling and Booking (e.g., Cal.com)</li>
                        <li>Email delivery services</li>
                        <li>Hosting services</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">6. Security</h2>
                    <p>
                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">7. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at <a href="mailto:info@neurothrivecoach.co.uk" className="text-primary hover:underline">info@neurothrivecoach.co.uk</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
