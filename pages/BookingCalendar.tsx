import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(5);
    const [selectedTime, setSelectedTime] = useState('09:00 AM');

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111518] dark:text-gray-100 font-display transition-colors duration-200 min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur border-b border-[#f0f3f4] dark:border-gray-800 px-4 md:px-10 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-4">
                        <img 
                            src="/neuro_thrive_coach_logo_display.png" 
                            alt="Neuro Thrive Coach" 
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </Link>
                    <div className="flex items-center gap-4 md:gap-8">
                        <Link to="/booking-options" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">Cancel Booking</Link>
                        <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold shadow-sm">
                            Support
                        </button>
                    </div>
                </div>
            </header>
            <main className="flex flex-col flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
                <div className="max-w-[960px] mx-auto w-full mb-8">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-6 justify-between items-end">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-black leading-tight tracking-tight mb-1">Select Time &amp; Payment</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Step 2 of 3</p>
                            </div>
                            <span className="material-symbols-outlined text-primary text-3xl opacity-20">schedule</span>
                        </div>
                        <div className="rounded-full bg-[#dce2e5] dark:bg-gray-700 h-2 overflow-hidden">
                            <div className="h-full rounded-full bg-primary transition-all duration-500" style={{width: '66%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1080px] mx-auto w-full items-start">
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-gray-800">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-6">
                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-full transition-colors text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined">chevron_left</span>
                                        </button>
                                        <p className="text-base font-bold text-center">October 2023</p>
                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-full transition-colors text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-7 gap-y-2 mb-2">
                                        <p className="text-xs font-bold text-slate-400 text-center uppercase">Su</p>
                                        <p className="text-xs font-bold text-slate-400 text-center uppercase">Mo</p>
                                        <p className="text-xs font-bold text-slate-400 text-center uppercase">Tu</p>
                                        <p className="text-xs font-bold text-slate-400 text-center uppercase">We</p>
                                        <p className="text-xs font-bold text-slate-400 text-center uppercase">Th</p>
                                        <p className="text-xs font-bold text-slate-400 text-center uppercase">Fr</p>
                                        <p className="text-xs font-bold text-slate-400 text-center uppercase">Sa</p>
                                    </div>
                                    <div className="grid grid-cols-7 gap-y-2 place-items-center">
                                        {[...Array(31)].map((_, i) => {
                                            const day = i + 1;
                                            const isSelected = day === selectedDate;
                                            const isUnavailable = day === 10;
                                            
                                            let className = "h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ";
                                            
                                            if (isSelected) {
                                                className += "bg-primary text-white font-bold shadow-md transform scale-105";
                                            } else if (isUnavailable) {
                                                className += "text-slate-300 dark:text-slate-600 line-through cursor-not-allowed";
                                            } else {
                                                className += "hover:bg-slate-100 dark:hover:bg-gray-700";
                                            }

                                            return (
                                                <button 
                                                    key={day} 
                                                    onClick={() => !isUnavailable && setSelectedDate(day)}
                                                    className={className}
                                                    disabled={isUnavailable}
                                                >
                                                    {day}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="hidden md:block w-px bg-slate-100 dark:bg-gray-700"></div>
                                <div className="md:w-48 flex flex-col gap-3">
                                    <h3 className="text-sm font-semibold mb-1 text-slate-500 dark:text-slate-400">Thursday, Oct {selectedDate}</h3>
                                    <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto time-slot-container pr-1">
                                        {['09:00 AM', '09:30 AM', '10:00 AM', '11:15 AM', '01:00 PM', '02:30 PM', '03:00 PM', '04:45 PM'].map(time => (
                                            <button 
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`w-full py-2.5 px-4 text-sm font-medium rounded-lg border transition-all ${
                                                    selectedTime === time 
                                                    ? 'border-primary/30 bg-primary/5 text-primary' 
                                                    : 'border-slate-200 dark:border-gray-700 hover:border-primary hover:text-primary'
                                                }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 p-4 bg-primary/10 rounded-xl items-start">
                            <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">info</span>
                            <div>
                                <p className="text-sm font-medium text-[#111518] dark:text-white">Note regarding time zones</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Times are displayed in your local time zone (America/New_York). You can change this in your profile settings later.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-gray-800 sticky top-24">
                            <div className="border-b border-dashed border-slate-200 dark:border-gray-700 pb-6 mb-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Session Summary</p>
                                        <h3 className="text-xl font-bold">60 Minute Strategy Session</h3>
                                    </div>
                                    <div className="size-10 rounded-full bg-slate-100 dark:bg-gray-700 flex items-center justify-center text-slate-500 dark:text-slate-300">
                                        <span className="material-symbols-outlined">psychology</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                        <span className="text-sm">Oct {selectedDate}, 2023</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">schedule</span>
                                        <span className="text-sm">{selectedTime} (60 min)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">videocam</span>
                                        <span className="text-sm">Google Meet</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm">Session Fee</span>
                                    <span className="font-medium">$150.00</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm">Processing Fee</span>
                                    <span className="font-medium">$4.50</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-gray-700">
                                    <span className="font-bold text-lg">Total</span>
                                    <span className="font-black text-2xl text-primary">$154.50</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-sm flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">lock</span>
                                    Secure Payment
                                </h4>
                                <div className="space-y-3">
                                    <div>
                                        <label className="sr-only">Cardholder Name</label>
                                        <input className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium placeholder:text-slate-400" placeholder="Name on card" type="text" />
                                    </div>
                                    <div className="relative">
                                        <label className="sr-only">Card Number</label>
                                        <input className="w-full h-11 px-4 pr-10 rounded-lg bg-background-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium placeholder:text-slate-400" placeholder="Card number" type="text" />
                                        <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400">credit_card</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium placeholder:text-slate-400" placeholder="MM / YY" type="text" />
                                        <input className="w-full h-11 px-4 rounded-lg bg-background-light dark:bg-background-dark border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium placeholder:text-slate-400" placeholder="CVC" type="text" />
                                    </div>
                                </div>
                                <button onClick={() => alert('Booking Confirmed! (Mock)')} className="mt-4 w-full h-12 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
                                    <span>Confirm Booking</span>
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </button>
                                <div className="flex justify-center items-center gap-2 mt-2">
                                    <span className="material-symbols-outlined text-green-500 text-[16px]">check_circle</span>
                                    <span className="text-xs text-slate-500 font-medium">SSL Encrypted Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookingCalendar;