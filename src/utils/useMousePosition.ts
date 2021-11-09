import { StateUpdater, useEffect, useState } from "preact/hooks";


const useMousePosition = () => {
  const [mousePosition, setMousePosition]: [{ x: number, y: number }, StateUpdater<{ x: number; y: number; }>] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;