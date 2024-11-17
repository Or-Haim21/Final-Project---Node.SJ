import React from "react";

const UsersTable = ({ users }) => {
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
                Max actions
              </th>
              <th className="px-0 w-1/4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Currently allowed actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              const textColorClass =
                user.currentlyAllowedActions === 0
                  ? "text-red-700"
                  : "text-gray-700";
              return (
                <tr key={user._id} >
                  <td
                    className={`border-t-0 px-0 py-4 ${textColorClass} align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap`}
                  >
                    {user.name}
                  </td>
                  <td
                    className={`border-t-0 px-0 py-4 ${textColorClass} align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap`}
                  >
                    {user.numOfActions}
                  </td>
                  <td
                    className={`border-t-0 px-0 py-4 ${textColorClass} align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap`}
                  >
                    {user.currentlyAllowedActions}
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

export default UsersTable;
