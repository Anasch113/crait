import React, { useState, useEffect } from "react";
import DashNav from "./DashNav";
import DashFooter from "./DashFooter";
import DashTop from "./DashTop";
import DashBottom from "./DashBottom";
import { useParams } from "react-router-dom";
import blue from "./images/blue.jpg";
import brown from "./images/brown.jpg";
import green from "./images/green.jpg";
import orange from "./images/orange.jpg";
import pink from "./images/pink.jpg";
import purple from "./images/purple.jpg";

function Dashboard() {
  const { username } = useParams();
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const avatars = [blue, brown, green, orange, pink, purple];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    setAvatar(randomAvatar);
  }, []);

  return (
    <>
      <DashNav username={username} avatar={avatar} />
      <DashTop avatar={avatar}/>
      <DashBottom username={username} />
      <DashFooter />
    </>
  );
}

export default Dashboard;
