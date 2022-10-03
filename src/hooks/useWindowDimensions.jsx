import { useState, useEffect } from "react";
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ||
  (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0); // check if the device is mobile

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    !isMobile && window.addEventListener("resize", handleResize);
    return () => {
      !isMobile && window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
}
