import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeesTable = ({ employees }) => {
  const navigate = useNavigate();

  const handleEditEmployee = (employeeID) => {
    navigate(`/employees/edit-employee/${employeeID}`);
  };

  const handleEditDepartment = (departmentID) => {
    navigate(`/departments/edit-department/${departmentID}`); 
  };

  return (
    <div className="block w-full overflow-x-auto">
      <div className="max-h-[75vh] overflow-y-auto flex justify-center">
        <table className="bg-transparent w-full lg:w-2/3 border-collapse ">
          <thead className="sticky top-0 z-10 bg-secondary shadow-md">
            <tr>
              <th className="px-0 w-1/4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Name
              </th>
              <th className="px-0 w-1/4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Department
              </th>
              <th className="px-0 w-1/4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Shifts
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.details._id}>
                  <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap">
                    <button
                      onClick={() => handleEditEmployee(employee.details._id)}
                      className="text-blue-500 hover:underline"
                    >
                      {`${employee.details.firstName} ${employee.details.lastName}`}
                    </button>
                  </td>
                  <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap">
                    <button
                      onClick={() =>
                        handleEditDepartment(employee.department._id)
                      }
                      className="text-blue-500 hover:underline"
                    >
                      {employee.department.name}
                    </button>
                  </td>
                  <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap">
                    <ul>
                      {employee.shifts?.map((shift, shiftIndex) => {
                        const formattedDate = new Date(shift.date)
                          .toISOString()
                          .slice(0, 10);
                        return (
                          <li key={shiftIndex}>
                            {`${formattedDate}, ${shift.startingHour}-${shift.endingHour}`}
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesTable;
