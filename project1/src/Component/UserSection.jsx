import React from 'react'

const UserSection = ({response}) => {
  return (
    <div>
     {response.length > 0 ? (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Street</th>
        <th>Suite</th>
        <th>City</th>
        <th>Zipcode</th>
        <th>Geo</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company Name</th>
        <th>Catch Phrase</th>
        <th>BS</th>
      </tr>
    </thead>
    <tbody>
      {response.map(user => (
        <tr key={user?.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.address?.street}</td>
          <td>{user.address?.suite}</td>
          <td>{user.address?.city}</td>
          <td>{user.address?.zipcode}</td>
          <td>({user.address?.geo?.lat}, {user.address?.geo?.lng})</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.company?.name}</td>
          <td>{user.company?.catchPhrase}</td>
          <td>{user.company?.bs}</td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  "No Records Found"
)}


      </div>
  )
}

export default UserSection