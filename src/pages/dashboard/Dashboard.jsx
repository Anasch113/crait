import React, { useState, useEffect } from "react";
import DashNav from "./DashNav";
import DashFooter from "./DashFooter";
import DashTop from "./DashTop";
import DashBottom from "./DashBottom";
import { useParams } from "react-router-dom";

import initials from "./images/initials.jpg";

function Dashboard() {
  const [avatar, setAvatar] = useState(initials);

  return (
    <>
      <DashNav avatar={avatar} />
      <DashTop avatar={avatar} />
      <DashBottom />
      <DashFooter />
    </>
  );
}

export default Dashboard;
