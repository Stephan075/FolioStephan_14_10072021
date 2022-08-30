import { Routes, Route, Navigate } from "react-router-dom"; //route

// components
// import Layout from "./components/Layout";

// pages
import Home from "./pages/Home/Home";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employeeList" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
