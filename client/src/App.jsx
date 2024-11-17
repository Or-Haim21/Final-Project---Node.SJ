import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import EmployeesPage from "./pages/dashboard/employees/EmployeesPage";
import EditEmployeePage from "./pages/dashboard/employees/EditEmployeePage";
import AddEmployeePage from "./pages/dashboard/employees/AddEmployeePage";
import DepartmentsPage from "./pages/dashboard/departments/DepartmentsPage";
import ShiftsPage from "./pages/dashboard/shifts/ShiftsPage";
import UsersPage from "./pages/dashboard/users/UsersPage";
import EditDepartmentPage from "./pages/dashboard/departments/EditDepartmentPage";
import AddDepartmentPage from "./pages/dashboard/departments/AddDepartmentPage";
import EditShiftPage from "./pages/dashboard/shifts/EditShiftPage";
import AddShift from "./pages/dashboard/shifts/AddShiftPage";
import AuthPage from "./pages/auth/AuthPage";


const App = () => {

  return (
    <Routes>
      {/* Redirect root path to /employees */}
      <Route path="/" element={<Navigate to="/employees" replace />} />
      
      <Route path="/auth" element={<AuthPage/>}/>
      <Route path="/" element={<DashboardPage/>}>
        <Route path="employees" element={<EmployeesPage />} /> {/* Default employees page */}
        <Route path="employees/edit-employee/:id" element={<EditEmployeePage />} />
        <Route path="employees/add-employee" element={<AddEmployeePage />} />

        <Route path="departments" element={<DepartmentsPage />} />
        <Route path="departments/edit-department/:id" element={<EditDepartmentPage/>} />
        <Route path="departments/add-department" element={<AddDepartmentPage/>} />

        <Route path="shifts" element={<ShiftsPage />} />
        <Route path="shifts/edit-shift/:id" element={<EditShiftPage/>} />
        <Route path="shifts/add-shift" element={<AddShift/>} />

        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};

export default App;