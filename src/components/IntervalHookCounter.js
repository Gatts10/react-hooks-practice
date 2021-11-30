import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  //Funciona das duas maneiras

  //   const tick = () => {
  //     setCount(count + 1);
  //   };

  //   useEffect(() => {
  //     const interval = setInterval(tick, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <label>Interval Counter</label>
      <div>{count}</div>
    </div>
  );
}

export default IntervalHookCounter;
