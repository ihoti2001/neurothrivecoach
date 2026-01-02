import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    
    const handleBooking = () => {
        navigate('/services');
    };

    return (
        <>
            <section className="w-full max-w-[1280px] px-4 md:px-10 py-12 md:py-20">
                <div className="@container">
                    <div className="flex flex-col-reverse gap-10 md:gap-16 md:flex-row items-center">
                        <div className="flex flex-col gap-6 flex-1 text-left items-start max-w-[600px]">
                            <h1 className="text-text-main dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                                Master Your Mind, Embrace Your Potential.
                            </h1>
                            <h2 className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                                Professional ADHD coaching designed to help you organize your life, focus on what matters, and thrive without the overwhelm.
                            </h2>
                            <div className="pt-2">
                                <button onClick={handleBooking} className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-base font-bold leading-normal shadow-lg shadow-primary/20">
                                    <span className="truncate">Book a Free Discovery Session</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div aria-label="Calm and organized workspace with natural light" className="w-full max-w-[500px] aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden relative shadow-xl" role="img" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATS94RA8zMNUEvLKWCK7k_qNJ26Cdt9BWNfrrMcHtD71-8INm-VwAg-p8HvWRSDkk3pdG4lt7CjBOgKscm0lbRs7ms4CfVapYkZ66M446mTip8m9W6RkthAkd4sNoZwanfXEhO-2cPsCN712eEMzySXjCyg3n1rYSik-SpZ5DrHpjjb02r4Y8XSxY7RR1J-3eEnOOAMuqi2nJvnaOYftCgKPhOZ59Iy8sUPFJ_wGmCnbQZgJmRQYp8mWpn-o_bNPrF5mBuJRoSqHs')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
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
                                How I Can Help
                            </h2>
                            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                                Specialized support tailored to your unique brain wiring, focusing on strategies that stick.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-[28px]">psychology</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">Executive Function</h3>
                                    <p className="text-text-muted dark:text-gray-400 text-base leading-relaxed">
                                        Build systems that work with your brain, not against it. Master planning and initiation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-[28px]">schedule</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">Time Management</h3>
                                    <p className="text-text-muted dark:text-gray-400 text-base leading-relaxed">
                                        Practical strategies to manage your schedule, overcome time blindness, and meet deadlines.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 rounded-3xl bg-background-light dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-[28px]">self_improvement</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">Emotional Regulation</h3>
                                    <p className="text-text-muted dark:text-gray-400 text-base leading-relaxed">
                                        Tools to navigate intensity, reduce rejection sensitivity, and find your calm center.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-24">
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary">format_quote</span>
                        <h2 className="text-text-main dark:text-white text-2xl font-bold">Client Stories</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-[#162228] p-8 rounded-3xl shadow-sm h-full hover:shadow-md transition-all">
                            <div className="flex flex-col gap-6 h-full">
                                <div className="flex items-center gap-4">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-14 shadow-inner shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqmHMzne3kfowehf8ufPz4i4smHt-XduVGO3v__J_DfYPFyoQ8qpHJy83t9eAUwHOrvNuvK5ypzYKOMQB-wDMiao0ShCrVu5KxAnOGqP5YJPxS7QXRFlttFRODKE6QUKHzVpqBYPDSf8rKUxoMq92wsjiqB55IthEH4kEj86_jInUrK1DLm8aDHcIGZhki-W6F5o2Tyw3AWRC6kybxOx4mDr7TLJXTx8ap1Wg3IbezrR73-EocIibo2vHozg8TOIeQB7QgUzZM-4A')"}}>
                                    </div>
                                    <div>
                                        <p className="text-text-main dark:text-white text-lg font-bold leading-normal">Sarah M.</p>
                                        <div className="flex gap-0.5 text-[#F59E0B]">
                                            {[1,2,3,4,5].map(i => (
                                                <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-text-main dark:text-gray-200 text-lg md:text-xl italic font-medium leading-relaxed">
                                    "This coaching changed my life. The strategies are practical, and for the first time, I feel understood. The simple approach really works for my ADHD brain."
                                </blockquote>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white dark:bg-[#162228] p-8 rounded-3xl shadow-sm h-full hover:shadow-md transition-all">
                             <div className="flex flex-col gap-6 h-full">
                                <div className="flex items-center gap-4">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-14 shadow-inner shrink-0" style={{backgroundImage: "url('https://i.pravatar.cc/150?img=11')"}}>
                                    </div>
                                    <div>
                                        <p className="text-text-main dark:text-white text-lg font-bold leading-normal">James T.</p>
                                        <div className="flex gap-0.5 text-[#F59E0B]">
                                            {[1,2,3,4,5].map(i => (
                                                <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-text-main dark:text-gray-200 text-lg md:text-xl italic font-medium leading-relaxed">
                                    "I never thought I could be this organized. The body doubling sessions helped me clear a backlog of work I'd been avoiding for months. Highly recommended!"
                                </blockquote>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white dark:bg-[#162228] p-8 rounded-3xl shadow-sm h-full hover:shadow-md transition-all">
                             <div className="flex flex-col gap-6 h-full">
                                <div className="flex items-center gap-4">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-14 shadow-inner shrink-0" style={{backgroundImage: "url('https://i.pravatar.cc/150?img=5')"}}>
                                    </div>
                                    <div>
                                        <p className="text-text-main dark:text-white text-lg font-bold leading-normal">Elena R.</p>
                                        <div className="flex gap-0.5 text-[#F59E0B]">
                                            {[1,2,3,4,5].map(i => (
                                                <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-text-main dark:text-gray-200 text-lg md:text-xl italic font-medium leading-relaxed">
                                    "Alex gets it. No judgment, just real solutions. I've learned to work with my energy levels instead of fighting them, and my anxiety has dropped significantly."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;