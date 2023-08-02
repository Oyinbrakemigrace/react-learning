import React, { useState } from "react";

const TheUseRefHook = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(true);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleText = () => {
    setText(!text);
  };

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          handleCount();
          handleText();
        }}
      >
        Click me
      </button>
      <div>{text && <h1>This is text</h1>}</div>
    </div>
  );
};

export default TheUseRefHook;
