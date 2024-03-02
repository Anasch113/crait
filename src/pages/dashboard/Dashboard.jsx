import React, { useState, useEffect } from "react";
import DashNav from "./DashNav";
import DashFooter from "./DashFooter";
import DashTop from "./DashTop";
import DashBottom from "./DashBottom";
import Loading from "./Loading";
import initials from "./images/initials.jpg";
import DashTwo from "./DashTwo";

function Dashboard() {
  const avatar = initials;
  const [category, setCategory] = useState("one");

  return (
    <>
      <DashNav avatar={avatar} />
      <DashTop avatar={avatar} setCategory={setCategory} category={category} />
      {category === "one" ? (
        <DashBottom />
      ) : category === "two" ? (
        <DashTwo avatar={avatar} />
      ) : (
        ""
      )}
      <DashFooter />
    </>
  );
}
export default Dashboard;
