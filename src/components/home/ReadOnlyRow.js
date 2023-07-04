import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useGlobalContext } from '../../context'

const ReadOnlyRow = ({ task, handleEditClick}) => {
    const {onDelete} = useGlobalContext();
  const getUsername = localStorage.getItem("loginUser");
  
  return (
    <div
      className={`${task.title === "user story" ? "card-layout-blue" : ""} ${
        task.title === "tech task" ? "card-layout-green" : ""
      } ${task.title === "bug" ? "card-layout-red" : ""}`}
    >
      <p>
        {task.day},{task.time}
      </p>
      <h3><Link to={{pathname:`/detail/${task.projectName}`}}>{task.projectName}</Link></h3>
      <h4>{task.title}</h4>
      <h5>{task.level}</h5>
      <p>{task.issue}</p>
      {getUsername === null ? (
        ""
      ) : (
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm"
          className="btn"
          onClick={() => handleEditClick(task.id)}
        >
          Edit
        </button>
      )}
      {getUsername === null ? (
        ""
      ) : (
        <button
          type="button"
          class="btn btn-outline-secondary btn-sm"
          className="btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ReadOnlyRow;
