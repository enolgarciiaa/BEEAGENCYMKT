import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringButton, setHoveringButton] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor?.tagName.toLowerCase() === "button") {
        setHoveringButton(true);
      } else {
        setHoveringButton(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Cursor circular */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-6 h-6 bg-yellow-400 rounded-full mix-blend-difference transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      />

      {/* Tooltip "Saber más" si está sobre un botón */}
      {hoveringButton && (
        <div
            className="fixed z-[9999] text-sm text-white bg-black/30 border border-white/40 px-5 py-2 rounded-full backdrop-blur-md transition-opacity duration-200 pointer-events-none"
            style={{
            top: position.y - 10,
            left: position.x + 20,
            }}
            >
            Saber más
        </div>
      )}
    </>
  );
};

export default CustomCursor;
