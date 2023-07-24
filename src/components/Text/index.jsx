import React from "react";

const sizeClasses = {
  txtPlayfairDisplayRegular20: "font-normal font-playfairdisplay",
  txtPoppinsRegular44: "font-normal font-poppins",
  txtPoppinsRegular16Gray800: "font-normal font-poppins",
  txtPoppinsMedium65: "font-medium font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium26: "font-medium font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
