import React, { useState } from "react";
import FieldAndLabel from "./fieldAndLabel";
import Button from "./button";
import axios from "axios";

const AUTH_URL = 'http://localhost:3000/auth/login';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    email: "",
  });

  const handleInputChange = (name, value) => {
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await axios.post(AUTH_URL, loginDetails); 
    sessionStorage.setItem('token',data.token);
    location.href('./emploees');
  };

  return (
    <div className="bg-gray-50 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="./assets/images/login.jpg"
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 ">
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-full text-base">
          <h1 className="mb-10 text-4xl font-semibold">Login</h1>
          <form onSubmit={handleSubmit}>
            <FieldAndLabel
              field={{
                type: "text",
                name: "username",
                value: loginDetails.username,
              }}
              label={"Username"}
              callback={handleInputChange}
            />
            <FieldAndLabel
              field={{
                type: "text",
                name: "email",
                value: loginDetails.email,
              }}
              label={"Email"}
              callback={handleInputChange}
            />
            <br />
            <Button label={"Login"} color={"bg-blue-500"} type={"submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;