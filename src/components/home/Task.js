import React from 'react'
import EditableRow from './EditableRow'
import ReadOnlyRow from './ReadOnlyRow'
import { useGlobalContext } from '../../context'

const Task = ({task}) => {
    const {editTaskId,setEditTaskId} = useGlobalContext()
    //Edit Submit Click
  const handleEditClick = (id) => {
    if (id === task.id) setEditTaskId(task.id);
  };

  return (
    <div>
        {editTaskId === task.id 
        ? <EditableRow task={task} />
        : <ReadOnlyRow task={task} handleEditClick={handleEditClick}/>
        }
    </div>
  )
}

export default Task