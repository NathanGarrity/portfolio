import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const trailRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.createElement("div");
      dot.className =
        "fixed w-2 h-2 rounded-full bg-blue-400 pointer-events-none opacity-75 blur-sm";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.transition = "opacity 0.5s ease-out";
      document.body.appendChild(dot);
      trailRef.current.push(dot);

      // Remove after fade out
      setTimeout(() => {
        dot.style.opacity = "0";
        setTimeout(() => {
          dot.remove();
          trailRef.current.shift();
        }, 500);
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // this component renders nothing directly
}