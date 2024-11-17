import React, { useState } from "react";
import axios from "axios";
import FieldAndLabel from "../../../components/fieldAndLabel";
import Button from "../../../components/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AUTH_URL = "http://localhost:3000/auth/login";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const [loginDetails, setLoginDetails] = useState({
    username: "Bret",
    email: "Sincere@april.biz",
  });

  const handleInputChange = (name, value) => {
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: userDetails } = await axios.post(AUTH_URL, loginDetails);
      if (!userDetails.token) {
        setLoginErrorMessage("* One or more details are incorrect!");
        return;
      }

      setLoginErrorMessage("");
      dispatch({ type: "LOGIN", payload: userDetails });
      navigate("/");
    } catch (error) {
      console.log("Error Login Action:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Left Image Section */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src="./assets/images/login.jpeg"
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Login Form Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8">
        <div className="w-full max-w-md">
          <h1 className="mb-10 text-4xl font-semibold">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FieldAndLabel
              field={{
                type: "text",
                name: "username",
                value: loginDetails.username,
              }}
              label={"Username"}
              setFieldValue={handleInputChange}
            />
            <FieldAndLabel
              field={{
                type: "text",
                name: "email",
                value: loginDetails.email,
              }}
              label={"Email"}
              setFieldValue={handleInputChange}
            />
            {loginErrorMessage && (
              <p className="text-red-500 text-sm mt-2">{loginErrorMessage}</p>
            )}
            <Button label={"Login"} color={"bg-primary"} type={"submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
