import React, { useState, useEffect } from 'react';
import butter from '../utils/buttercms';
import { Link } from 'react-router-dom';

interface Post {
    slug: string;
    title: string;
    summary: string;
    featured_image?: string;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const resp = await butter.post.list({ page: 1, page_size: 10 });
                setPosts(resp.data.data);
            } catch (err: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
                console.error("Error fetching posts:", err);
                setError("Failed to load blog posts. Please check your API key or try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="text-center py-20 text-text-primary text-xl">Loading posts...</div>;
    if (error) return <div className="text-center py-20 text-red-500 text-xl">{error}</div>;

    return (
        <div className="bg-bg-light min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center">
                    Latest Insights
                </h1>

                {posts.length === 0 ? (
                    <div className="text-center text-text-secondary text-lg">
                        No posts found. Check back later!
                    </div>
                ) : (
                    <div className="grid gap-10 md:grid-cols-2">
                        {posts.map((post) => (
                            <div key={post.slug} className="bg-bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-border-color">
                                {post.featured_image && (
                                    <img src={post.featured_image} alt={post.title} className="w-full h-48 object-cover" />
                                )}
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-text-primary mb-3">{post.title}</h2>
                                    <p className="text-text-secondary mb-4 line-clamp-3">{post.summary}</p>
                                    {/* Note: In a real app we'd link to a detailed post page e.g. /blog/:slug */}
                                    <span className="text-accent font-semibold hover:underline cursor-pointer">Read more &rarr;</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
