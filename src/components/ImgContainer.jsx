function ImgContainer({
  src,
  className,
  position = "center",
  size = "contain",
  ...props
}) {
  return (
    <div
      className={className}
      data-speed={props["data-speed"]}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: position,
        backgroundSize: size,
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default ImgContainer;
