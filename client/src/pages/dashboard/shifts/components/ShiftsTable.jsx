import React from "react";
import { useNavigate } from "react-router-dom";

const ShiftsTable = ({ shifts }) => {
  const navigate = useNavigate();

  const handleEditShift = (id) => {
    navigate(`/shifts/edit-shift/${id}`);
  };

  return (
    <div className="block w-full overflow-x-auto">
      <div className="max-h-[75vh] overflow-y-auto flex justify-center">
        <table className="bg-transparent w-2/3 border-collapse">
          <thead className="sticky top-0 bg-secondary shadow-md">
            <tr>
              <th className="px-0 w-1/4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Date
              </th>
              <th className="px-0 w-1/4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Start
              </th>
              <th className="px-0 w-1/4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                End
              </th>
            </tr>
          </thead>

          <tbody>
            {shifts.map((shift) => {
              const formattedDate = `${new Date(shift.date)
                .toISOString()
                .slice(0, 10)}`;
              return (
                <tr key={shift._id}>
                  <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap">
                    <button
                      onClick={() => handleEditShift(shift._id)}
                      className="text-blue-500 hover:underline"
                    >
                      {formattedDate}
                    </button>
                  </td>
                  <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap">
                    {shift.startingHour}
                  </td>
                  <td className="border-t-0 px-0 py-4 text-gray-700 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap">
                    {shift.endingHour}
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

export default ShiftsTable;
