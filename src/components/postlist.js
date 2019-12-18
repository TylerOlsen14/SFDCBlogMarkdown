import React from "react"
import Markdown from 'react-markdown'
import postlist from "../posts.json"

import "./components.css"

const PostList = () => {
  const excerptList = postlist.map(post => {
    return post.content.split(" ").slice(0, 20).join(" ")
  })
  return (
    <div className="postlist">
      <h1 className="title">All posts</h1>
      {postlist.length && 
        postlist.map((post, i) => {
          return (
            <div key={i} className="post-card">
              <h2>{post.title}</h2>
              <small>Published on {post.date}
                <br/>by {post.author}
              </small>
              <hr/>
              <Markdown source={excerptList[i]} escapeHtml={false} />
              <small>
                Read more ...
              </small>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostList