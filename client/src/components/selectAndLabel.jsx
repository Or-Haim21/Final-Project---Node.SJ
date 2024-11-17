import React, { useEffect } from "react";

const SelectAndLabel = ({ data, label, setFieldValue }) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldValue(name, value);
  };

  return (
    <div className="mb-4">
      <label htmlFor={data.name} className="block text-gray-700 mb-2">
        {label}
      </label>
      <select
        id={data.name}
        name={data.name}
        value={data.value || ""}
        className="w-full border border-primary rounded-md py-2 px-3 focus:outline-none focus:border-primary"
        onChange={handleChange} 
      >
        <option value="" disabled>
          {label}
        </option>
        {data.options.map((option) => ( 
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAndLabel;
