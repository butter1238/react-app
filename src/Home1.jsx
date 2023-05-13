import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/about.jpg";
import Common from "./Common";

const Home1 = () => {
  return (
    <>
      <Common
        name="Grow  your Business Name"
        imgsrc={web}
        visit="/Servic"
        btnname=" Get Started"
        contact
        Now
      />
    </>
  );
};

export default Home1;
