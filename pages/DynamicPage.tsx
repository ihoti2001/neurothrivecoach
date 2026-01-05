import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import butter from '../utils/buttercms';

interface PageFields {
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface PageData {
    slug: string;
    name: string;
    published: string;
    updated: string;
    page_type: string;
    fields: PageFields;
}

const DynamicPage: React.FC = () => {
    const { type, slug } = useParams<{ type: string; slug: string }>();
    const [page, setPage] = useState<PageData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPage = async () => {
            if (!type || !slug) return;

            setLoading(true);
            setError(null);

            try {
                const resp = await butter.page.retrieve(type, slug);
                setPage(resp.data.data);
            } catch (err: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
                console.error("Error fetching page:", err);
                setError("Page not found or an error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchPage();
    }, [type, slug]);

    if (loading) return <div className="text-center py-20 text-primary text-xl">Loading page...</div>;
    if (error || !page) return <div className="text-center py-20 text-red-500 text-xl">{error || "Page not found"}</div>;

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen py-20 px-6 text-text-main dark:text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                    {page.name || page.fields.headline || "Untitled Page"}
                </h1>

                <div className="prose dark:prose-invert max-w-none">
                    {/* 
              This is a generic renderer. In a real scenario, you might want to map 
              specific field names to components based on 'type'.
              For now, we dump the fields to show it's working.
            */}
                    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto">
                        {JSON.stringify(page.fields, null, 2)}
                    </pre>

                    {/* Example: If you have a rich text field named 'body' */}
                    {page.fields.body && (
                        <div dangerouslySetInnerHTML={{ __html: page.fields.body }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DynamicPage;
