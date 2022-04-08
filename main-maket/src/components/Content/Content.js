import React from "react";
import "./style.scss";
// import Paper from "../Paper/Paper";
// import { Button as MuButton } from "@mui/material";
// import { Button as AntButton } from "antd";
// import Button, { EmoButton } from "../Button";
import Counter from "../Counter/Counter";
// import Order from "../Order/Order";
// import LifecycleClass from "../Lifecycle/LifecycleClass";
// import FetchAPI from "../Fetch/FetchAPI";
// import Characters from "../Characters/Characters";
// import Button from "../Button/Button";
// import { EmoButton } from "../Button/Button.style";

const dataCity = ["Киев", "Лондон", "Москва", "Уфа"];
// const dataCity = undefined;

export default function Content() {
  const onButtonClick = (text) => {
    console.log(text);
  };

  return (
    <div className="content_main">
      {/* <FetchAPI /> */}
      {/* <Characters /> */}
      {/* <LifecycleClass /> */}
      <Counter />

      {/* <Button
        label="Добавить преподавателя"
        size={15}
        bgColor={"#94d2bd"}
        onClickFunction={onButtonClick}
      />
      <Button
        label="Добавить город"
        size={10}
        bgColor={"#b5179e"}
        onClickFunction={onButtonClick}
      /> */}

      {/* <Order /> */}
      {/* <Button
        label="Добавить факультет"
        bgColor={"#b08968"}
        onClickFunction={onButtonClick}
      />
      <MuButton color="success">Edit</MuButton>

      <AntButton type="primary">Add</AntButton>
      <EmoButton size={35} bgColor={"#fcd5ce"}>
        Emotion
      </EmoButton>
      {dataCity &&
        dataCity.map((element, index) => {
          return <Paper content={element} fSize={23} key={index} />;
        })} */}

      {/* {dataCity?.map((element, index) => {
        return <Paper content={element} fSize={23} key={index} />;
      })} */}
    </div>
  );
}
