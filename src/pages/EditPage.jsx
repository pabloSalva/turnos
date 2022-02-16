import React from "react";
import { useNavigate } from "react-router-dom";
import EditTemplate from "../templates/edit";

const EditPage = () => {
  let navigate = useNavigate();
  const guardar = () => {
    navigate("/");
  };
  return <EditTemplate guardar={guardar} cancelar={guardar} />;
};

export default EditPage;
