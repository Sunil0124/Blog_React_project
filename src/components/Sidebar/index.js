import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
        
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Sunil Ganta I am a software developer specialization in Front end developement!</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar