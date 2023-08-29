// use-dimensions.js
import { useState, useEffect } from "react";

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({});

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  return dimensions;
};
