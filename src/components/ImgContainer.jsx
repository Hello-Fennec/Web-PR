import { useState } from "react";
import { useEffect } from "react";

function ImgContainer({ src, className, position, size, ...props }) {
  const [source, setSource] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);
  return (
    <div
      className={className}
      data-speed={props["data-speed"]}
      style={{
        backgroundImage: `url(${source})`,
        backgroundPosition: position || "center",
        backgroundSize: size || "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default ImgContainer;
