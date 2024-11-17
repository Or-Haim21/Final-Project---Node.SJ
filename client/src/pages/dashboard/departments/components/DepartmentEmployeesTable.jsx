import React from 'react'

const DepartmentEmployeesTable = ({employees}) => {

  return (
    <div className="block w-full overflow-x-auto">
      <div className="h-60 overflow-y-auto">
        <table className="bg-transparent w-full border-collapse ">
          <thead className="sticky top-0 bg-secondary shadow-md">
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Name
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Start work year
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td className="border-t-0 px-6 text-gray-700 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                  {`${employee.firstName} ${employee.lastName}`}
                </td>
                <td className="border-t-0 px-6 text-gray-700 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                  {employee.startWorkYear}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartmentEmployeesTable