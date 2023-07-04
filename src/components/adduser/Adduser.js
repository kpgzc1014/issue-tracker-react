import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Adduser.css'
import { useGlobalContext } from '../../context'

const Adduser = () => {
    const {adminUsers,addUser} = useGlobalContext()
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [role,setRole] = useState("")
    const [username,setUsername] = useState("")
    const [assignedProject,setAssignedProject] = useState("")
    const [createdOn,setCreatedOn] = useState("")
    const [createdBy,setCreatedBy] = useState("")
    const [modifiedOn,setModifiedOn] = useState("")
    const [modifiedBy,setModifiedBy] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        addUser({name,email,role,username,assignedProject,createdOn,createdBy,modifiedOn,modifiedBy})

        setName("")
        setEmail("")
        setRole("")
        setUsername("")
        setAssignedProject("")
        setCreatedOn("")
        setCreatedBy("")
        setModifiedOn("")
        setModifiedBy("")

        navigate('/users');
    }

  return (
    <div className='add-user-content'>
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Role</label>
                <input type="text" class="form-control" id="exampleInputPassword1" value={role} onChange={(e) => setRole(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">User Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Assigned Project</label>
                <input type="text" class="form-control" id="exampleInputPassword1" value={assignedProject} onChange={(e) => setAssignedProject(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Created On</label>
                <input type="date" class="form-control" id="exampleInputPassword1" value={createdOn} onChange={(e) => setCreatedOn(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Created By</label>
                <select class="form-control" id="exampleFormControlSelect1" value={createdBy} onChange={(e) => setCreatedBy(e.currentTarget.value)}>
                    <option></option>
                    {
                        // eslint-disable-next-line array-callback-return
                        adminUsers.map((adminUser) => {
                            if(adminUser.role === "Manager"){
                                return (
                                    <option value={`${adminUser.username}`}>
                                        {adminUser.username}
                                    </option>
                                 )
                            }     
                        })
                    }
                </select>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Modified On</label>
                <input type="date" class="form-control" id="exampleInputPassword1" value={modifiedOn} onChange={(e) => setModifiedOn(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Modified By</label>
                <select class="form-control" id="exampleFormControlSelect1" value={modifiedBy} onChange={(e) => setModifiedBy(e.currentTarget.value)}>
                    <option></option>
                    {
                        // eslint-disable-next-line array-callback-return
                        adminUsers.map((adminUser) => {
                            if(adminUser.role === "Manager"){
                                return (
                                    <option value={`${adminUser.username}`}>
                                        {adminUser.username}
                                    </option>
                                 )
                            }     
                        })
                    }
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>
  )
}

export default Adduser