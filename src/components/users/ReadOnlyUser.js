import React from 'react'
import { useGlobalContext } from '../../context'

const ReadOnlyUsers = ({user,handleEditClick}) => {
    const {onDeleteUser} = useGlobalContext()
  const getRole = localStorage.getItem("loginUserRole")
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.username}</td>
      <td>{user.assignedProject}</td>
      <td>{user.createdOn}</td>
      <td>{user.createdBy}</td>
      <td>{user.modifiedOn}</td>
      <td>{user.modifiedBy}</td>
      {
        getRole === "Manager"
        ?
        <td>
          <button
            onClick={(event) => handleEditClick(event, user)}
            style={{ margin: "0.2rem" }}
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteUser(user.id)}
            style={{ margin: "0.2rem" }}
          >
            Delete
          </button>
        </td>
        :
        ""
      }
    </tr>
  )
}

export default ReadOnlyUsers