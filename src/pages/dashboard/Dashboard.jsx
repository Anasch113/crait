import React from 'react'
import DashNav from './DashNav'
import DashFooter from './DashFooter'
import DashTop from './DashTop'
import DashBottom from './DashBottom'
import { useParams } from "react-router-dom";
function Dashboard() {
  let { username } = useParams();
  console.log(username)
  return (
    <>

    <DashNav username={username}/>
    <DashTop />
    <DashBottom username={username}/>
    <DashFooter />
    </>
  )
}

export default Dashboard