import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //UseEffect corre sempre depois que o component é rendered
  //Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //Update the document title using the browser API
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  //Conditional run Effect
  //Ao colocar count no array como 2º parametro, o useEffect só é executado quando o valor de count mudar 

  return (
    <div>
      Use Effect
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
    </div>
  );
}

export default HookCounterOne;
