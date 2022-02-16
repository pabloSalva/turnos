import React from "react";
import HomeTemplate from "../templates/home";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  const filter = () => {
    navigate(`/editar`);
  };
  return <HomeTemplate editar={filter} />;
};

export default HomePage;
