import React from 'react'

const CommentSection = ({response}) => {
  return(
  <div>
     <table  className="table table-striped">
          <tr>
          <th>Name </th>
          <th>Email</th>
          <th>Body</th>
          </tr>
 {response.length > 0 ? response.map(comment => (
          <tr key={comment.id}>
          <td>{comment.name}</td>
          <td>{comment.email}</td>
          <td>{comment.body}</td>
          </tr>
      )): "No record found"}
          </table>
</div>
  )
}

export default CommentSection