import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import dayjs from 'dayjs';
import './Addtask.css'
import { useGlobalContext } from '../../context'

const Addtask = () => {
    const {addTask,projects} = useGlobalContext()
  const navigate = useNavigate();
  const date = dayjs()
  const [issue,setIssue] = useState('');
  const [title,setTitle] = useState('');
  const [level,setLevel] = useState('');
  const [day,setDay] = useState(date.format('YYYY-MM-DD'))
  const [time,setTime] = useState(date.format('HH:mm:ss'))
  const [projectName,setProjectName] = useState('')

  const onSubmit = (e) => {
      e.preventDefault();
      const date = dayjs()
      const newDay = date.format('YYYY-MM-DD')
      const newTime = date.format('HH:mm:ss')
      setDay(newDay)
      setTime(newTime)
      
      addTask({issue,title,level,day,time,projectName})

      setIssue("")
      setTitle("")
      setLevel("")
      setProjectName("")

      navigate('/');
  }

  return (
    <div className='add-content'>
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Project Name:</label>
                <select class="form-control" id="exampleFormControlSelect1" value={projectName} onChange={(e) => setProjectName(e.currentTarget.value)}>
                    <option></option>
                    {
                        projects.map((project) => {
                                return (
                                    <option value={`${project.name}`}>
                                        {project.name}
                                    </option>
                                 )
                        })
                    }
                </select>
            </div>

            <div class="form-group">
                <label for="exampleFormControlSelect1">Title:</label>
                <select class="form-control" id="exampleFormControlSelect1" value={title} onChange={(e) => setTitle(e.currentTarget.value)}>
                    <option></option>
                    <option value={'user story'}>User story</option>
                    <option value={'tech task'}>Tech task</option>
                    <option value={'bug'}>Bug</option>
                </select>
            </div>

            <div class="form-group">
                <label for="exampleFormControlSelect1">Level:</label>
                <select class="form-control" id="exampleFormControlSelect1" value={level} onChange={(e) => setLevel(e.currentTarget.value)}>
                    <option></option>
                    <option value={'waitting'}>Waitting</option>
                    <option value={'developing'}>Developing</option>
                    <option value={'wait for test'}>Wait for test</option>
                    <option value={'testing'}>Testing</option>
                    <option value={'completed'}>Completed</option>
                </select>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Issue:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={issue} onChange={(e) => setIssue(e.target.value)}></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>
  )
}

export default Addtask