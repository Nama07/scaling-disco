import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleOpenPost = (postId) => {
    window.location.href = `/blog/${postId}`;
  };

  return (
    <div className="container mt-5">
      <h2>Blog Posts</h2>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Posted by: {post.user || 'Anonymous'}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenPost(post.id)}
                >
                  View Post
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
