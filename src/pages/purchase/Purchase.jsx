import React from "react";
import PurchaseNav from "./PurchaseNav";
import DashFooter from "../dashboard/DashFooter";
import PurchaseMain from "./PurchaseMain";

function Purchase() {
  return (
    <>
      <PurchaseNav />
      <PurchaseMain />
      <DashFooter />
    </>
  );
}

export default Purchase;
