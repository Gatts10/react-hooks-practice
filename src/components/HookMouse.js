import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect mouse called");
    window.addEventListener("mousemove", logMousePosition);

    //Return function serve para quando queremos fazer cleanUp(unmounting) do component
    return () => {
      console.log("Component unmouting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
    //useEffect só é chamado uma vez quando faz o render inicial
    //Para isto acontecer tem que se passar o 2º parametro vazio(array)
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
