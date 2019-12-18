import React from "react"
import Markdown from 'react-markdown'
import postlist from "../posts.json"

import "./components.css"

const PostList = () => {
  
  return (
    <div className="postlist">
      <h1 className="title">All posts</h1>
      {postlist.length && 
        postlist.map((post, i) => {
          return (
            <div className="post-card">
              <h2>{post.title}</h2>
              <small>Published on {post.date}
                <br/>by {post.author}
              </small>
              <hr/>
              <Markdown source={post.content} escapeHtml='false' />
            </div>
          )
        })
      }
    </div>
  )
}

export default PostList