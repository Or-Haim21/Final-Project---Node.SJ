import React from "react";
import Button from "./button";

const AddNewButton = ({ onClick }) => (
  <div className="w-40">
    <Button label={"Add new"} onClickFunction={onClick} />
  </div>
);

export default AddNewButton;
