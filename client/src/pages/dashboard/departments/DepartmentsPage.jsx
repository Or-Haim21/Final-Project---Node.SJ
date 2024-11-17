import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import DepartmentsTable from './components/DepartmentsTable'
import AddNewButton from '../../../components/AddNewButton'
import DepartmentsAPI  from '../../../API/DepartmentsAPI'
import PageHeader from "../../../components/PageHeader";



const DepartmentsPage = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);


  useEffect(()=>{
    const fetchDepartments = async () => {
      try {
        const data = await DepartmentsAPI.getDepartmentsData();
        setDepartments(data);               
      } catch (error) {
        console.error("Error fetching employees data:", error);
      }
    };
    fetchDepartments();
  },[])
  const handleAddDepartment = () => {
    navigate("add-department");
  }

  return (
    <div className="w-full p-4 space-y-10">
      <PageHeader title="Departments"/>
      <div className="flex flex-col md:flex-row md:justify-end items-center space-y-4 md:space-y-0">
        <AddNewButton onClick={handleAddDepartment}/> 
      </div>
      <div className="flex justify-center items-center w-full">
        <DepartmentsTable departments={departments}/>
      </div>
    </div>
  )
}

export default DepartmentsPage