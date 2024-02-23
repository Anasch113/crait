import React from 'react'
import DashNav from './DashNav'
import DashFooter from './DashFooter'
import DashTop from './DashTop'
import DashBottom from './DashBottom'

function Dashboard() {
  return (
    <>
    <DashNav />
    <DashTop />
    <DashBottom />
    <DashFooter />
    </>
  )
}

export default Dashboard