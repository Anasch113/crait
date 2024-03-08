import React, { useState, useEffect } from "react";
import DashNav from "./DashNav";
import DashFooter from "./DashFooter";
import DashTop from "./DashTop";
import DashBottom from "./DashBottom";
import initials from "./images/initials.jpg";
import DashTwo from "./DashTwo";
import Loading from "./Loading";

function Dashboard() {
  const avatar = initials;
  const [category, setCategory] = useState("one");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <DashNav avatar={avatar} />
        <DashTop
          avatar={avatar}
          setCategory={setCategory}
          category={category}
        />
        {category === "one" ? (
          <DashBottom />
        ) : category === "two" ? (
          <DashTwo avatar={avatar} />
        ) : category === "four" ?(
          <DashTwo avatar={avatar} />
        ):''}
        <DashFooter />
      </>
    );
  }
}
export default Dashboard;
