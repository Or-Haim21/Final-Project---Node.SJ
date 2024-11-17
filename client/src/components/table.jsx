import React from "react";

const Table = ({ headers, rows }) => {
  return (
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-full">
      <div className="block p-6 w-full overflow-x-auto shadow-lg rounded-md">
        <table className="items-center bg-transparent w-full border-collapse">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 bg-blueGray-50 text-grayray-400 align-middle border border-solid border-gray-400 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border-t-0 px-6 text-gray-700 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                  >
                    {row[header.toLowerCase()]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
