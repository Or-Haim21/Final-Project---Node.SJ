import React, { useEffect, useState } from "react";
import FieldAndLabel from "../../../../components/fieldAndLabel";
import SelectAndLabel from "../../../../components/selectAndLabel";
import DepartmentsAPI from '../../../../API/DepartmentsAPI';



const EmployeeForm = ({ employee, handleSetEmployeeDetails }) => {
  const [employeeData, setEmployeeData] = useState(employee);
  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    if (employee) {
      setEmployeeData({
        firstName: employee.firstName || "",
        lastName: employee.lastName || "",
        startWorkYear: employee.startWorkYear || "",
        departmentID: employee.departmentID || "",
      });
    }
  }, [employee]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await DepartmentsAPI.getDepartmentsData();
        const departmentsData = data.map(department=> department.details) 
        setDepartments(departmentsData);               
      } catch (error) {
        console.error("Error fetching departments data:", error);
      }
    };
    fetchDepartments();
  }, []);


  const handleInputChange = (name, value) => {
    const updatedDetails = { ...employeeData, [name]: value };
    setEmployeeData(updatedDetails);
    handleSetEmployeeDetails(name, value);
  };

  return (
    <div className="w-full max-w-[500px] rounded-md p-2">
        <form>
          <FieldAndLabel
            field={{
              type: "text",
              name: "firstName",
              value: employeeData.firstName,
            }}
            label={"First Name"}
            setFieldValue={handleInputChange}
          />
          <FieldAndLabel  
            field={{
              type: "text",
              name: "lastName",
              value: employeeData.lastName,
            }}
            label={"Last Name"}
            setFieldValue={handleInputChange}
          />
          <FieldAndLabel
            field={{
              type: "number",
              name: "startWorkYear",
              value: employeeData.startWorkYear,
            }}
            label={"Start Work Year"}
            setFieldValue={handleInputChange}
          />
          <SelectAndLabel
            data={{
              name: "departmentID",
              options: departments,
              value: employeeData.departmentID,
            }}
            label={"Department"}
            setFieldValue={handleInputChange}
          />
        </form>
      </div> 
  );
};


export default EmployeeForm;
