import React from "react";

type ButtonProps = {
  title: string;
  type: "success" | "error" | "primary";
};

const Button: React.FunctionComponent<ButtonProps> = ({ title, type }) => {
  return (
    <>
      <button
        type="button"
        className={`btn btn-${type} w-32`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
