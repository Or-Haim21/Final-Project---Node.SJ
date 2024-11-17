import React, { useEffect } from "react";

const ShiftsTable = ({ shifts, handleDeleteShift}) => {

  const handelDeleteShift = (shiftId) => {
    handleDeleteShift(shiftId);
  }

  
  return (
    <div className="block w-full overflow-x-auto">
      <div className="h-60 overflow-y-auto">
        <table className="bg-transparent w-full border-collapse ">
          <thead className="sticky top-0 bg-secondary shadow-md">
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Date
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Start hour
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                End hour
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"></th>
            </tr>
          </thead>

          <tbody>
            {shifts.map((shift) => {
              const formattedDate = `${new Date(shift.date)
                .toISOString()
                .slice(0, 10)}`;
              return (
                <tr key={shift._id}>
                  <td className="border-t-0 px-6 text-gray-700 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                    {formattedDate}
                  </td>
                  <td className="border-t-0 px-6 text-gray-700 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                    {shift.startingHour}
                  </td>
                  <td className="border-t-0 px-6 text-gray-700 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                    {shift.endingHour}
                  </td>
                  <td className="border-t-0 px-6 text-gray-700 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                    <img
                      onClick={() => handelDeleteShift(shift._id)}
                      className="size-6 cursor-pointer"
                      src="/assets/icons/delete.svg"
                      alt="Delete"
                    />
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
