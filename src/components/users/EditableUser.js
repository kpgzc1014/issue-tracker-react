import React, { useState } from 'react'
import { useGlobalContext } from '../../context'

const EditableUsers = ({user,cancelClick}) => {
    const {onSaveUser} = useGlobalContext()
    const [id,setId] = useState(user.id)
    const [name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email)
    const [role,setRole] = useState(user.role)
    const [username,setUsername] = useState(user.username)
    const [assignedProject,setAssignedProject] = useState(user.assignedProject)
    const [createdOn,setCreatedOn] = useState(user.createdOn)
    const [createdBy,setCreatedBy] = useState(user.createdBy)
    const [modifiedOn,setModifiedOn] = useState(user.modifiedOn)
    const [modifiedBy,setModifiedBy] = useState(user.modifiedBy)

    const saveClick = () => {
    
        onSaveUser({id,name,email,role,username,assignedProject,createdOn,createdBy,modifiedOn,modifiedBy})
    
        setId("")
        setName("")
        setEmail("")
        setRole("")
        setUsername("")
        setAssignedProject("")
        setCreatedOn("")
        setCreatedBy("")
        setModifiedOn("")
        setModifiedBy("")
      }

  return (
    <tr>
      <td>
        <input
          type="text"
          readOnly
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          readOnly
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          readOnly
          value={assignedProject}
          onChange={(e) => setAssignedProject(e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          readOnly
          value={createdOn}
          name="createdOn"
          onChange={(e) => setCreatedOn(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          readOnly
          value={createdBy}
          name="createdBy"
          onChange={(e) => setCreatedBy(e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          value={modifiedOn}
          name="modifiedOn"
          onChange={(e) => setModifiedOn(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={modifiedBy}
          name="modifiedBy"
          onChange={(e) => setModifiedBy(e.target.value)}
        />
      </td>
      <td>
        <button type="submit" style={{ margin: "0.2rem" }} onClick={() => saveClick()}>
          Save
        </button>
        <button onClick={() => cancelClick()} style={{ margin: "0.2rem" }}>
          Cancel
        </button>
      </td>
    </tr>
  )
}

export default EditableUsers