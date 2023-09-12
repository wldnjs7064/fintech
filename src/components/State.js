import React, { useState } from "react";

const State = () => {
  let value = "초기값";
  const [username, setUsername] = useState("초기값");
  setInterval(() => {
    value = "변경된 값";
    console.log(value);
    setUsername("변경된 값");
  }, 5000);
  return (
    <div>
      {value}

      {username}
    </div>
  );
};

export default State;
