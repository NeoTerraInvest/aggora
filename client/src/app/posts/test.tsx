"use client";
// import { useState } from "react";

const Test = () => {
  // const [count, setCount] = useState(0);
  // let test = "test";
  const testfunction = () => {
    console.log("test");
  };
  return <div onClick={testfunction}>Test</div>;
};

export default Test;
