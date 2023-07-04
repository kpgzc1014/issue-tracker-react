import React, { useState } from 'react'
import dayjs from 'dayjs';
import './Home.css'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context'

const EditableRow = ({task}) => {
    const {onEdit,cancelClick} = useGlobalContext();
    const date = dayjs()
    const [id,setId] = useState(task.id);
    const [issue,setIssue] = useState(task.issue);
    const [title,setTitle] = useState(task.title);
    const [level,setLevel] = useState(task.level);
    const [projectName,setProjectName] = useState(task.projectName);
    const [day,setDay] = useState(date.format('YYYY-MM-DD'))
    const [time,setTime] = useState(date.format('HH:mm:ss'))

    const onSubmit = (e) => {
        e.preventDefault();
        onEdit({id,issue,title,level,day,time,projectName})
    
        setId("")
        setIssue("")
        setTitle("")
        setLevel("")
        setDay("")
        setTime("")
        setProjectName("")
    }

  return (
    <form onSubmit={onSubmit}>
        <div className={`${task.title === 'user story' ? 'card-layout-blue':''} ${task.title === 'tech task' ? 'card-layout-green':''} ${task.title === 'bug' ? 'card-layout-red':''}`} >
            <p>{task.day},{task.time}</p>
            <Link to={{pathname:`/detail/${task.projectName}`}}>{task.projectName}</Link>
            <div style={{marginBottom:"0.5rem"}}>
                <select value={title} onChange={(e) => setTitle(e.currentTarget.value)}>
                    <option value={"user story"}>user story</option>
                    <option value={"tech task"}>tech task</option>
                    <option value={"bug"}>bug</option>
                </select>
            </div>
            <div style={{marginBottom:"0.5rem"}}>
                <select value={level} onChange={(e) => setLevel(e.currentTarget.value)}>
                    <option value={"waitting"}>waitting</option>
                    <option value={"developing"}>developing</option>
                    <option value={"wait for test"}>wait for test</option>
                    <option value={"testing"}>testing</option>
                    <option value={"completed"}>completed</option>
                </select>
            </div>
            <input value={issue} onChange={(e) => setIssue(e.target.value)}/>
            <button type="submit" class="btn btn-outline-secondary btn-sm" className='btn'>Save</button>
            <button type="button" class="btn btn-outline-secondary btn-sm" className='btn' onClick={() => cancelClick()}>Cancel</button>
        </div>
    </form>
  )
}

export default EditableRow
