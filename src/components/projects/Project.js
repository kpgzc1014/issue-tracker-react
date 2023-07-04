import React, { Fragment } from "react";
import EditableProjects from "./EditableProject";
import ReadOnlyProjects from "./ReadOnlyProject";
import { useGlobalContext } from '../../context'

const Project = () => {
  const {projects,editProjectId,setEditProjectId} = useGlobalContext();
  const getRole = localStorage.getItem("loginUserRole")
  const cancelClick = () => setEditProjectId(null);

  const handleEditClick = (event,project) => {
    event.preventDefault();
    setEditProjectId(project.id);
  };

  return (
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Start-Date</th>
            <th scope="col">Target-End-Date</th>
            <th scope="col">Actual-End-Date</th>
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
          {projects.map((project) => (
            <Fragment>
              {editProjectId === project.id ? (
                <EditableProjects
                  project={project}
                  cancelClick={cancelClick}
                />
              ) : (
                <ReadOnlyProjects
                  project={project}
                  handleEditClick={handleEditClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
  );
};

export default Project;

