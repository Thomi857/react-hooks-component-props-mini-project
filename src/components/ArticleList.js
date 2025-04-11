import React from 'react';
import Article from './Article'; // Adjusted the import path

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
            ))}
        </main>
    );
}

export default ArticleList;