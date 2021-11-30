import React, { useContext } from "react";
import { UserContext, WorkContext } from "../App";

function ComponentB() {
  const user = useContext(UserContext);
  const work = useContext(WorkContext);

  return (
    <div>
      <label>Context</label>
      <div>
        {user} - {work}
      </div>
    </div>
  );
}

export default ComponentB;
