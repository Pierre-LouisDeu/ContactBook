import React from "react";

type ActionType = {
  (param: boolean): void;
};

type ButtonProps = {
  title: string;
  type: "success" | "error" | "primary";
  action: ActionType;
};

const Button: React.FunctionComponent<ButtonProps> = ({ title, type, action }) => {
  return (
    <>
      <button
        type="button"
        className={`btn btn-${type} w-32`}
        onClick={() => action(true)}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
