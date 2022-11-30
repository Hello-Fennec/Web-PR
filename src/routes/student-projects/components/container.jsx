import React from "react";

export default function Container({ children }) {
  return (
    <div className=" max-w-6xl lg:max-w-2xl xs:max-w-md m-auto p-5 py-16 mb-5">
      {children}
    </div>
  );
}
