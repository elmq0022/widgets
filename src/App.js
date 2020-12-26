import React from "react";
import Accordion from "./components/Accordion";

export default () => {
  const items = [
    {
      title: "What it react",
      content: "React is a front end js framework"
    },
    {
      title: "Why use react",
      content: "Lots of people use it"
    },
    {
      title: "How do you use react",
      content: "Make components that react"
    },
  ];

  return (
    <div>
      <br />
      <Accordion items={items}/>
    </div>
  );
};
