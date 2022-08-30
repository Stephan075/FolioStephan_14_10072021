import { Routes, Route, Navigate } from "react-router-dom"; //route

// components
import Layout from "./components/Layout";

// pages
import Home from "./pages/Home/Home";
import EmployeeList from "./pages/EmployeeList/EmployeeList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/employeeList" element={<EmployeeList />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
