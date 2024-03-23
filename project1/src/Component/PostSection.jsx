import React from 'react'

const PostSection = ({response}) => {
  return (
    <div>
      {response.length > 0 ?
      response.map(post=>
        <div key={post.id} style={{border:'1px solid grey'}}>
        <b className='float-start'>{post.title} :</b><br/>
        <p>{post.body}</p>
        </div>
      ) : "No Record Found"}

      
      </div>
  )
}

export default PostSection