import React, { Fragment } from 'react'
import EditableUsers from './EditableUser'
import ReadOnlyUsers from './ReadOnlyUser'
import { useGlobalContext } from '../../context'

const User = () => {
  const {users,editUserId,setEditUserId} = useGlobalContext()
  const getRole = localStorage.getItem("loginUserRole")
    const cancelClick = () => setEditUserId(null);
    const handleEditClick = (event,user) => {
        event.preventDefault();
        setEditUserId(user.id);
      };

  return (
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Username</th>
            <th scope="col">Assigned-Project</th>
            <th scope="col">Create-On</th>
            <th scope="col">Create-By</th>
            <th scope="col">Modified-On</th>
            <th scope="col">Modified-By</th>
            {
              getRole === "Manager"?<th scope="col">Edit</th>: ""
            }
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Fragment>
              {editUserId === user.id ? (
                <EditableUsers
                  user={user}
                  cancelClick={cancelClick}
                />
              ) : (
                <ReadOnlyUsers
                  user={user}
                  handleEditClick={handleEditClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
  )
}

export default User