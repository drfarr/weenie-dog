import React, { useState } from "react";

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="fixed bottom-0 right-10"
      onClick={() => setIsOpen((old) => !old)}
    >
      {isOpen ? (
        <div
          className="tooltip tooltip-info"
          data-tip={"I'm just a dog. I can't help you. "}
        >
          <img className="w-52" src="/assistant.gif" />
        </div>
      ) : (
        <div className="text-5xl bg-base-100 rounded-full p-5 m-10 border-emerald-500 border-2 border-dashed drop-shadow-lg transition ease-in-out delay-150 hover:scale-150">
          🦴
        </div>
      )}
    </div>
  );
};

export default Assistant;
