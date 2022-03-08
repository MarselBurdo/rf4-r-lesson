import React from "react";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

export default function Wrapper() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "300px 1fr",
        width: "100%",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Content />
    </div>
  );
}
