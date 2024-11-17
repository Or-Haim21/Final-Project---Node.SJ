import React from "react";

const EmployeesList = ({ employees }) => {

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">
        Employees list on shift:
      </label>
      <ul className="list-disc list-inside space-y-2">
        {employees.map((employee) => (
          <li key={employee._id} className="text-gray-800">
            {`${employee.firstName} ${employee.lastName}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesList;
