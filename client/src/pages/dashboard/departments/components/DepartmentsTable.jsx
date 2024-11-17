import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeesAPI from "../../../../API/EmployeesAPI";

const DepartmentsTable = ({ departments }) => {
  const navigate = useNavigate();

  const handleEditDepartment = (departmentID) => {
    navigate(`/departments/edit-department/${departmentID}`);
  };

  const handleEditEmployee = (employeeID) => {
    navigate(`/employees/edit-employee/${employeeID}`);
  };

  return (
    <div className="block w-full overflow-x-auto">
      <div className=" max-h-[75vh] overflow-y-auto flex justify-center">
        <table className="justify-center items-center bg-transparent w-2/3 border-collapse">
          <thead className="sticky top-0 bg-secondary shadow-md">
            <tr>
              <th className="px-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Name
              </th>
              <th className="px-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Manager
              </th>
              <th className="px-0 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Employees
              </th>
            </tr>
          </thead>

          <tbody>
            {departments.map((department) => (
              <tr key={department.details._id}>
                <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap ">
                  <button
                    onClick={() => handleEditDepartment(department.details._id)}
                    className="text-blue-500 hover:underline"
                  >
                    {department.details.name}
                  </button>
                </td>
                <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap">
                  <button
                    onClick={() => handleEditEmployee(department.manager._id)}
                    className="text-blue-500 hover:underline"
                  >
                    {`${department.manager.firstName} ${department.manager.lastName}`}
                  </button>
                </td>
                <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap ">
                  <ul>
                    {department.employees.map((employee) => (
                      <li key={employee._id}>
                        <button
                          onClick={() => handleEditEmployee(employee._id)}
                          className="text-blue-500 hover:underline"
                        >
                          {`${employee.firstName} ${employee.lastName}`}
                        </button>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentsTable;
