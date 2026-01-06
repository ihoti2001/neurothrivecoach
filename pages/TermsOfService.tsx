import React from 'react';
import { Helmet } from 'react-helmet-async';
import { buildCanonical, buildOgImage, buildTitle } from '../src/lib/seo';

const TermsOfService: React.FC = () => {
    const pageTitle = buildTitle('Terms of Service');
    const pageDescription = 'Read the Neuro Thrive Coach terms of service for coaching sessions and bookings.';
    const canonicalUrl = buildCanonical('/terms-of-service');
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
                        Terms of Service
                    </h1>
                    <p className="text-[#637c88] dark:text-slate-400 text-lg">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-[#111518] dark:text-gray-300">
                    <p>
                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by Neuro Thrive Coach ("us", "we", or "our").
                    </p>
                    <p>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">1. Coaching Services Disclaimer</h2>
                    <p>
                        Neuro Thrive Coach provides ADHD coaching and consulting services. <strong>Our services are not a substitute for professional mental health care, medical care, or therapy.</strong> We do not diagnose or treat mental disorders. If you are experiencing a mental health crisis, please contact your local emergency services or a mental health professional immediately.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">2. Accounts and Booking</h2>
                    <p>
                        When you create an account or book a session with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your service.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">3. Cancellation and Rescheduling</h2>
                    <p>
                        We understand that life with ADHD can be unpredictable. However, to respect the time of both the coach and other clients, we require at least 24 hours notice for cancellations or rescheduling.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Sessions cancelled with more than 24 hours notice may be rescheduled at no extra cost.</li>
                        <li>Sessions cancelled with less than 24 hours notice will be charged at the full session rate.</li>
                        <li>"No-shows" will be charged at the full session rate.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">4. Payment</h2>
                    <p>
                        Payment is due upon booking for single sessions. For packages, payment is due in advance of the first session unless a payment plan has been agreed upon in writing. All prices are in GBP (£).
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">5. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features, and functionality are and will remain the exclusive property of Neuro Thrive Coach and its licensors. The content is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">6. Links To Other Web Sites</h2>
                    <p>
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by Neuro Thrive Coach. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">7. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">8. Changes</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-[#111518] dark:text-white">9. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at <a href="mailto:info@neurothrivecoach.co.uk" className="text-primary hover:underline">info@neurothrivecoach.co.uk</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
