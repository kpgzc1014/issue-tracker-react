import React, { useState } from "react";
import { useGlobalContext } from '../../context'

const EditableProjects = ({
  project,
  cancelClick,
}) => {
    const {onSaveProject} = useGlobalContext()
  const [id,setId] = useState(project.id)
  const [name,setName] = useState(project.name)
  const [startDate,setStartDate] = useState(project.startDate)
  const [targetEndDate,setTargetEndDate] = useState(project.targetEndDate)
  const [actualEndDate,setActualEndDate] = useState(project.actualEndDate)
  const [createdOn,setCreatedOn] = useState(project.createdOn)
  const [createdBy,setCreatedBy] = useState(project.createdBy)
  const [modifiedOn,setModifiedOn] = useState(project.modifiedOn)
  const [modifiedBy,setModifiedBy] = useState(project.modifiedBy)

  const saveClick = () => {
    
    onSaveProject({id,name,startDate,targetEndDate,actualEndDate,createdOn,createdBy,modifiedOn,modifiedBy})

    setId("")
    setName("")
    setStartDate("")
    setTargetEndDate("")
    setActualEndDate("")
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
          type="date"
          readOnly
          value={startDate}
          name="startDate"
          onChange={(e) => setStartDate(e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          readOnly
          value={targetEndDate}
          name="targetEndDate"
          onChange={(e) => setTargetEndDate(e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          value={actualEndDate}
          name="actualEndDate"
          onChange={(e) => setActualEndDate(e.target.value)}
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
  );
};

export default EditableProjects;
