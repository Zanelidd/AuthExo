import "./App.css";
import Header from "./pages/components/Header";
import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
