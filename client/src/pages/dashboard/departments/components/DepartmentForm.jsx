import React, { useEffect, useState } from "react";
import FieldAndLabel from "../../../../components/fieldAndLabel";
import SelectAndLabel from "../../../../components/selectAndLabel";
import EmployeestAPI from "../../../../API/EmployeesAPI";

const DepartmentForm = ({ department, handleSetDepartmentDetails }) => {
  const [employees, setEmployees] = useState([]);
  const [departmentData, setDepartmentData] = useState({});
  const [employeesList, setEmployeesList] = useState([]);


  useEffect(() => {
    if (department) {
      setDepartmentData(department);
    }
  }, [department]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await EmployeestAPI.getEmployeesData();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees data:", error);
      }
    };
    fetchEmployees();
  }, []);

  //Organize the employees list for display in dropdown
  useEffect(() => {
    const employeesList = employees.map((employee) => {
      return {
        _id: employee.details._id,
        name: `${employee.details.firstName} ${employee.details.lastName}`,
      };
    });
    setEmployeesList(employeesList);
  }, [employees]);

  const handleInputChange = (name, value) => {
    const updatedDetails = { ...departmentData, [name]: value };
    setDepartmentData(updatedDetails);
    handleSetDepartmentDetails(name, value);
  };

  return (
    <div className="w-full max-w-[500px] rounded-md p-2">
      <form>
        <FieldAndLabel
          field={{
            type: "text",
            name: "name",
            value: departmentData.name,
          }}
          label={"Name"}
          setFieldValue={handleInputChange}
        />
        <SelectAndLabel
          data={{
            name: "managerID",
            options: employeesList,
            value: departmentData.managerID,
          }}
          label={"Manager"}
          setFieldValue={handleInputChange}
        />
      </form>
    </div>
  );
};

export default DepartmentForm;
