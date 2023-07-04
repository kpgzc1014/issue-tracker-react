import React, { useState, useContext, useEffect } from 'react'
import { TASKS_URL } from "./urls";
import { PROJECTS_URL } from "./urls";
import { USERS_URL } from "./urls";
import { ADMINUSERS_URL } from "./urls";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [editUserId, setEditUserId] = useState(null);
    const [editProjectId, setEditProjectId] = useState(null);
    const [editTaskId, setEditTaskId] = useState(null);
    const [adminUsers,setAdminUsers] = useState([])
    const [loginUser, setLoginUser] = useState({
        name: "",
        email: "",
    });

    //Fetch adminUsers
    const fetchAdminUsers = async () => {
        const res = await fetch(ADMINUSERS_URL)
        const data = await res.json()
        return data
    }

    useEffect(() => {
        const getAdminUsers = async () => {
          const adminUsers = await fetchAdminUsers()
          setAdminUsers(adminUsers)
        }
        getAdminUsers()
    },[])

    //Login
    const onLogin = (user) => {
        const userName = user.name;
        const userRole = user.role;
        localStorage.setItem("loginUser", userName);
        localStorage.setItem("loginUserRole", userRole);
        setLoginUser({
        name: user.name,
        email: user.email,
        });
    };

    //Fetch Users
    const fetchUsers = async () => {
        const res = await fetch(USERS_URL);
        const data = await res.json();
        return data;
    };

    //Show Users
    useEffect(() => {
        const getUsers = async () => {
        const usersFromServer = await fetchUsers();
        setUsers(usersFromServer);
        };
        getUsers();
    }, []);

    //Edit User
    const onSaveUser = async (editedUser) => {
        const res = await fetch(USERS_URL + `/${editedUser.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(editedUser),
        });

        const data = await res.json();

        const newUsers = [...users];
        const index = users.findIndex(
        (user) => user.id === editedUser.id
        );
        newUsers[index] = data;
        setUsers(newUsers);
        setEditUserId(null);
    };

    //Add User
    const addUser = async (user) => {
        const res = await fetch(USERS_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user),
        });

        const data = await res.json();

        setUsers([...users, data]);

    };

    //Delete User
    const onDeleteUser = async (id) => {
        await fetch(USERS_URL + `/${id}`, {
        method: "DELETE",
        });
        setUsers(users.filter((user) => user.id !== id));
    };

    //Fetch Projects
    const fetchProjects = async () => {
        const res = await fetch(PROJECTS_URL);
        const data = res.json();
        return data;
    };

    //Show Projects
    useEffect(() => {
        const getProjects = async () => {
        const projectsFromServer = await fetchProjects();
        setProjects(projectsFromServer);
        };
        getProjects();
    }, []);

    //Edit Project
    const onSaveProject = async (editedProject) => {
        const res = await fetch(PROJECTS_URL + `/${editedProject.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(editedProject),
        });

        const data = await res.json();

        const newProjects = [...projects];
        const index = projects.findIndex(
        (project) => project.id === editedProject.id
        );
        newProjects[index] = data;
        setProjects(newProjects);
        setEditProjectId(null);
    };

    //Delete Project
    const onDeleteProject = async (id) => {
        await fetch(PROJECTS_URL + `/${id}`, {
        method: "DELETE",
        });
        setProjects(projects.filter((project) => project.id !== id));
    };

    //Add Project
    const addProject = async (project) => {
        const res = await fetch(PROJECTS_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(project),
        });

        const data = await res.json();

        setProjects([...projects, data]);

    };

    //Show Tasks
    useEffect(() => {
        const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
        };
        getTasks();
    }, []);

    //Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch(TASKS_URL);
        const data = await res.json();
        return data;
    };

    //Edit Task
    const onEdit = async (editedTask) => {
        const res = await fetch(TASKS_URL + `/${editedTask.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
        },
        body: JSON.stringify(editedTask),
        });
        const data = await res.json();
        const newTasks = [...tasks];
        const index = tasks.findIndex((task) => task.id === editedTask.id);
        newTasks[index] = data;
        setTasks(newTasks);
        setEditTaskId(null);
    };

    //Add Task
    const addTask = async (task) => {
        const res = await fetch(TASKS_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(task),
        });

        const data = await res.json();

        setTasks([...tasks, data]);

        // const id = nanoid()
        // const newTask = {id,...task}
        // setTasks([...tasks,newTask])
    };

    //Delete Task
    const onDelete = async (id) => {
        await fetch(TASKS_URL + `/${id}`, {
        method: "DELETE",
        });
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const cancelClick = () => setEditTaskId(null)

    return(
        <AppContext.Provider
            value={{
                    tasks,
                    onEdit,
                    editTaskId,
                    setEditTaskId,
                    onDelete,
                    loginUser,
                    setLoginUser,
                    cancelClick,
                    adminUsers,
                    onLogin,
                    addTask,
                    projects,
                    onSaveProject,
                    onDeleteProject,
                    addProject,
                    setEditProjectId,
                    editProjectId,
                    editUserId,
                    setEditUserId,
                    users,
                    onSaveUser,
                    addUser,
                    onDeleteUser
                }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
  
export { AppContext, AppProvider }