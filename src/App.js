import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addproject from "./components/addproject/Addproject";
import Addtask from "./components/addtask/Addtask";
import Adduser from "./components/adduser/Adduser";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Project from "./components/projects/Project";
import User from "./components/users/User";
import Navbar from "./navbar/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Project />}/>
        <Route path="/users" element={<User />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/addtask" element={<Addtask />}/>
        <Route path="/addproject" element={<Addproject />}/>
        <Route path="/adduser" element={<Adduser />}/>
      </Routes>
    </Router>
  );
}

export default App;
