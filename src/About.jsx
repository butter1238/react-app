import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { fname, lname } = useParams();
  return (
    <h1>
      HeLLo, I am {fname} {lname} Page
    </h1>
  );
};

export default About;
