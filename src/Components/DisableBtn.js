import { useState } from "react";

function DisableBtn() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={handleChange} />
      <button disabled={text.length < 1}>Submit</button>
    </>
  );
}

export default DisableBtn
