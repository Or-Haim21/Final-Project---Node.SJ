import React from 'react'

const FieldAndLabel = ({field, label, setFieldValue}) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldValue(name, value); 
  };

  return (
    <div className="mb-4">
          <label htmlFor={label} className="block text-gray-700 mb-2">
            {label}
          </label>
          <input
            type={field.type}
            id={field.name}
            value={field.value || ""}
            name={field.name}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
            autoComplete="off"
            onChange={handleChange}
          />
    </div>
  )
}

export default FieldAndLabel