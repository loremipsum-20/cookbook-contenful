import React from 'react';
import marked from 'marked';

const Post = ({ article }) => {
  console.log(article)
  const {name, featuredImage, description, category} = article.fields
  const {id} = article.sys
  console.log(id)
  const postDescription = marked(description)
  return (
    <div>
      <h2>{name}</h2>
      {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name} width='400'/>}
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
      <p>{category}</p>
    </div>
  )
}

export default Post
