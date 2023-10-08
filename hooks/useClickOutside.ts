import { useEffect, useRef } from "react";

type ClickOutsideCallback = () => void;

export default function useClickOutside (callbackFun: ClickOutsideCallback) {
  
  const domNodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    
    const handler = (event: MouseEvent) => {
      if (domNodeRef.current && !domNodeRef.current.contains(event.target as Node)) {
        callbackFun()
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [callbackFun]);

  return domNodeRef;
}