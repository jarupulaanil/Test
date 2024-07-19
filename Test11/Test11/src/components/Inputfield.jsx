import { useState } from "react";

export default function Inputfield() {
  const [user, setUser] = useState("");

  const userinput = (inputvalues) => {
    // update the values to the user state
    setUser(inputvalues.target.value);
  };
  const userinput1 = (inputvalues) => {
    // update the values to the user state
    setUser(inputvalues.target.value);
  };

  return (
    <div>
      <input type="text" id="username" onChange={userinput} />
      <input type="text" id="phonenumber" onChange={userinput1} />

      <button type="button">submit </button>
      <h3>user name :{user}</h3>
    </div>
  );
}
