import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContex, useGlobalContex } from "./context";
const Home = () => {
  const data = useGlobalContex()
  console.log(data);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
};

export default Home;
