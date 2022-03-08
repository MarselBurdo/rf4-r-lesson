import React from "react";
import Button from "../Button/Button";
import Paper from "../Paper/Paper";

const dataCity = ["Киев", "Лондон", "Москва", "Уфа"];
// const dataCity = undefined;

export default function Content() {
  const onButtonClick = (text) => {
    console.log(text);
  };

  return (
    <div>
      <Button
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
      />
      <Button
        label="Добавить факультет"
        bgColor={"#b08968"}
        onClickFunction={onButtonClick}
      />

      {dataCity &&
        dataCity.map((element, index) => {
          return <Paper content={element} fSize={23} key={index} />;
        })}

      {/* {dataCity?.map((element, index) => {
        return <Paper content={element} fSize={23} key={index} />;
      })} */}
    </div>
  );
}
