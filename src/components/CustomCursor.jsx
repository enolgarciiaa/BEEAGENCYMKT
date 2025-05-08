import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringButton, setHoveringButton] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileWidth = window.innerWidth < 768;
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      return isMobileWidth || isTouchDevice;
    };
  
    if (checkIsMobile()) {
      setShowCursor(false);
      return;
    }
  
    const handleResize = () => {
      setShowCursor(!checkIsMobile());
    };
  
    window.addEventListener("resize", handleResize);
  
    let animationFrameId;
  
    const moveCursor = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
  
        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
        setHoveringButton(elementUnderCursor?.tagName.toLowerCase() === "button");
      });
    };
  
    window.addEventListener("mousemove", moveCursor);
  
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  

  if (!showCursor) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-6 h-6 neon-button-cyan rounded-full mix-blend-difference transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      />
      {hoveringButton && (
        <div
          className="fixed z-[9999] text-sm text-white bg-black/30 border border-white/40 px-5 py-2 rounded-full backdrop-blur-md transition-opacity duration-200 pointer-events-none"
          style={{
            top: position.y - 10,
            left: position.x + 20,
          }}
        >
          DESCUBRE MÁS
        </div>
      )}
    </>
  );
};

export default CustomCursor;
