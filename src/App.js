// import React, { createContext } from "react";
// import ComA from "./ComA";

// const FirstName = createContext();
// const LastName = createContext();

// const App = () => {
//   return (
//     <>
//       <FirstName.Provider value={"RAHIL"}>
//         <LastName.Provider value={"SHAIKH"}>
//           <ComA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </>
//   );
// };

// export default App;
// export { FirstName, LastName };

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [num, setnum] = useState(0);
//   const [nums, setnums] = useState(0);

//   useEffect(() => {
//     alert("you click");
//     console.log("you click");
//   }, [num]);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setnum(num + 1);
//         }}
//       >
//         CLICK ME {num}
//       </button>
//       <br />

//       <button
//         onClick={() => {
//           setnums(nums + 1);
//         }}
//       >
//         CLICK ME {nums}
//       </button>
//     </>
//   );
// };
// export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [num, setnum] = useState(0);
//   useEffect(() => {
//     alert("click me");
//     document.title = `you clickde me ${num} times`;
//   });
//   return (
//     <>
//       <button
//         onClick={() => {
//           setnum(num + 1);
//         }}
//       >
//         click me {num}
//       </button>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Contact from "./Contact";
// import Error from "./Error";
// import Menu from "./Menu";
// import Home from "./Home";
// import Service from "./Service";
// import About from "./About";
// import User from "./User";
// import Search from "./Search";
// import Search1 from "./Search1";

// const App = () => {
//   return (
//     <>
//       <Menu />
//       <Routes>
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/About" element={<About />} />npm i bootstrap@5.0.1
//         <Route path="/Service" element={<Service />} />
//         <Route path="/Search" element={<Search />} />
//         <Route element={<Error />} />
//         <Route path="/user/:fname/:lname" element={<User />} />
//         <Route path="/Search1" element={<Search1 />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   return (
//     <>
//       <div className="container">
//         <h1 className="text-center">Welcom Back</h1>
//         <br />
//         <div className="text-center">
//           <div className="card" style={{ width: "18rem" }}>
//             <img
//               src="https://picsum.photos/200/"
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <a
//                 href="https://www.youtube.com/watch?v=RPdKk9rqSlA&list=RDRPdKk9rqSlA&start_radio=1"
//                 className="btn btn-warning"
//               >
//                 Go somewhere
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home1 from "./Home1";
import About1 from "./About1";
import Servic from "./Servic";
import Navbar1 from "./Navbar1";
import Contact1 from "./Contact1";

const App = () => {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/Home1" Component={Home1} />
        <Route path="/About1" Component={About1} />
        <Route path="/Servic" Component={Servic} />
        <Route path="/Contact1" Component={Contact1} />
      </Routes>
    </>
  );
};

export default App;
