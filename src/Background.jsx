import { useState } from "react";

export default function Background() {
  const [hovered, setHovered] = useState([false, false]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#ffedd3] pointer-events-none">
      <div
        className="absolute w-[55vw] h-[65vh] top-[-5%] left-[-20%] overflow-hidden pointer-events-auto transition-all duration-500"
        style={{
          clipPath: "ellipse(60% 50% at 50% 50%)",
        }}
        onMouseEnter={() => setHovered([true, hovered[1]])}
        onMouseLeave={() => setHovered([false, hovered[1]])}
      >
        <img
          src="/oval1.png"  
          alt="Left oval placeholder"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered[0] ? "opacity-0" : "opacity-100"
          }`}
        />

      </div>
      <div
        className="absolute w-[50vw] h-[60vh] top-[-10%] left-[55%] overflow-hidden pointer-events-auto transition-all duration-500"
        style={{
          clipPath: "ellipse(60% 50% at 50% 50%)",
        }}
        onMouseEnter={() => setHovered([hovered[0], true])}
        onMouseLeave={() => setHovered([hovered[0], false])}
      >
        <img
          src="/oval2.png"  
          alt="top left oval shape"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered[1] ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
}
