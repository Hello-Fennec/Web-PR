function ImgContainer({ src, className, position, size, ...props }) {
  return (
    <div
      className={className}
      data-speed={props["data-speed"]}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: position || "center",
        backgroundSize: size || "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default ImgContainer;
