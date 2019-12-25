import React from 'react'
import {Redirect} from 'react-router-dom'
import Layout from '../components/layout'
import postlist from '../posts.json'
import Markdown from "react-markdown"

const Post = (props) => {
  const validId = parseInt(props.match.params.id)
  console.log(validId)
  if (!validId){
    return <Redirect to="/404" />
  }
  const fetchedPost = {}
  let postExists = false
  postlist.forEach((post, i) => {
    if (validId === post.id){
      fetchedPost.title = post.title ? post.title : "No title given"
      fetchedPost.date = post.date ? post.date : "No date given"
      fetchedPost.author = post.author ? post.author : "No author given"
      fetchedPost.content = post.content ? post.content : "No content given"
      postExists = true
    }
  })
  if (postExists === false){
    return <Redirect to="/404" />
  }
  console.log(postExists)
  console.log(fetchedPost)
  return (
    <Layout>
      <div className="post">
        <h2>{fetchedPost.title}</h2>
        <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
        <hr/>
        <Markdown source={fetchedPost.content} escapeHtml={false} />
      </div>
    </Layout>
  )
}

export default Post