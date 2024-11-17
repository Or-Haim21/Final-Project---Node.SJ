import React, { useEffect, useState } from 'react'
import PageHeader from '../../../components/PageHeader';
import UsersAPI from '../../../API/UsersAPI'
import UsersTable from './components/UsersTable';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const data = await UsersAPI.getUsersData();
          setUsers(data);               
        } catch (error) {
          console.error("Error fetching users data:", error);
        }
      };
      fetchUsers();
    }, []);
    
  return (
    <div className="w-full p-4 space-y-10">
      <PageHeader title="Users" />
      <div className="flex justify-center items-center w-full">
        <UsersTable users={users}/>
      </div>
    </div>
  );
}

export default UsersPage