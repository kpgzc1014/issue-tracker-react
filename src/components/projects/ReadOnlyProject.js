import React from "react";
import { useGlobalContext } from '../../context'

const ReadOnlyProjects = ({ project, handleEditClick }) => {
    const {onDeleteProject} = useGlobalContext()
  const getRole = localStorage.getItem("loginUserRole")
  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.startDate}</td>
      <td>{project.targetEndDate}</td>
      <td>{project.actualEndDate}</td>
      <td>{project.createdOn}</td>
      <td>{project.createdBy}</td>
      <td>{project.modifiedOn}</td>
      <td>{project.modifiedBy}</td>
      {
        getRole === "Manager"
        ?
        <td>
          <button
            onClick={(event) => handleEditClick(event, project)}
            style={{ margin: "0.2rem" }}
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteProject(project.id)}
            style={{ margin: "0.2rem" }}
          >
            Delete
          </button>
        </td>
        :
        ""
      }
    </tr>
  );
};

export default ReadOnlyProjects;
