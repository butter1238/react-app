import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();

  return (
    <>
      <h1>
        hello user{fname} {lname} Page
      </h1>
      <p>my current location is {location.pathname}</p>
      {location.pathname === `/user/rahil/shaikh` ? (
        <button onClick={() => alert(`you are awesome`)}>Click ME</button>
      ) : null}
    </>
  );
};

export default User;
