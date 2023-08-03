import "./App.css";
import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Users from "./pages/Users";
import HeaderLayout from "./layouts/headerLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<HeaderLayout />}>
            <Route element={<ProtectedLayout />}>
              <Route path="users" element={<Users />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
