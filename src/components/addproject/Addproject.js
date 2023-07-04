import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Addproject.css'
import { useGlobalContext } from '../../context'

const Addproject = () => {
    const {addProject,adminUsers} = useGlobalContext()
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [startDate,setStartDate] = useState("")
    const [targetEndDate,setTargetEndDate] = useState("")
    const [actualEndDate,setActualEndDate] = useState("")
    const [createdOn,setCreatedOn] = useState("")
    const [createdBy,setCreatedBy] = useState("")
    const [modifiedOn,setModifiedOn] = useState("")
    const [modifiedBy,setModifiedBy] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        addProject({name,startDate,targetEndDate,actualEndDate,createdOn,createdBy,modifiedOn,modifiedBy})

        setName("")
        setStartDate("")
        setTargetEndDate("")
        setActualEndDate("")
        setCreatedOn("")
        setCreatedBy("")
        setModifiedOn("")
        setModifiedBy("")

        navigate('/projects');
    }
    
  return (
    <div className='add-project-content'>
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Start Date</label>
                <input type="date" class="form-control" id="exampleInputPassword1" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Target End Date</label>
                <input type="date" class="form-control" id="exampleInputPassword1" value={targetEndDate} onChange={(e) => setTargetEndDate(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Actual End Date</label>
                <input type="date" class="form-control" id="exampleInputPassword1" value={actualEndDate} onChange={(e) => setActualEndDate(e.target.value)}/>
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

export default Addproject