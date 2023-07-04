import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context'

const Navbar = () => {
    const {setLoginUser} = useGlobalContext();
    const navigate = useNavigate();
    const getUser = localStorage.getItem("loginUser")
    const getRole = localStorage.getItem("loginUserRole")

    const logout = () => {
        localStorage.clear()
        setLoginUser({
          name: "",
          email: "",
        });
      }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
            ISSUE -TRACKER
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                    ISSUES <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/projects">
                    PROJECTS <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/users">
                    USERS <span className="sr-only">(current)</span>
                    </Link>
                </li>
            </ul>
            {
            getUser === null
            ?
                <button type="button" className="btn btn-dark" onClick={() => navigate("/login")} style={{marginRight:"2rem"}}>
                Login
                </button>
            :
            <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" style={{marginRight:"2rem"}}>
                {getUser}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/addtask">Add Issue</Link>
                {
                    getRole === "Manager"?<Link className="dropdown-item" to="/addproject">Add Project</Link>: ""
                }
                {
                    getRole === "Manager"?<Link className="dropdown-item" to="/adduser">Add User</Link>: ""
                }
                <Link className="dropdown-item" to="/" onClick={logout}>Logout</Link>
                </div>
            </div>
            }
        </div>
    </nav>
  )
}

export default Navbar
