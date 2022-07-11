import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import EmployeeList from "./pages/EmployeeList/EmployeeList";

function App() {
  return (
    <div>
      {/* <Header />
      <Content />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="employeeList" element={<EmployeeList />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
