import React from 'react';

const DynamicPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen py-20 px-6 text-text-main dark:text-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center py-20 text-red-500 text-xl">Page not found</div>
            </div>
        </div>
    );
};

export default DynamicPage;
