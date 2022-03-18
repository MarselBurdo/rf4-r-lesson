import React from "react";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import st from "./Wrapper.module.css";

export default function Wrapper() {
  return (
    <div className={`${st.main} ${st.text}`}>
      <Sidebar />
      <Content />
    </div>
  );
}
