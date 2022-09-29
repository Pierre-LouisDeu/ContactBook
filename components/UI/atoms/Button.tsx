import React, { useState, useEffect } from "react";

type ActionType = {
  (): void;
};

type ButtonProps = {
  title: "New" | "Delete" | "Save";
  action: ActionType;
};

const Button: React.FunctionComponent<ButtonProps> = ({ title, action }) => {
  return (
    <>
      {title === "New" && (
        <button
          type="button"
          // className={`inline-flex items-center rounded-md border border-transparent bg-${color}-100 px-6 py-3 text-base font-medium text-${color}-700 hover:bg-${color}-200 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2 w-32 px-10`}
          className={`inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-32 px-10`}
          onClick={action}
        >
          {title}
        </button>
      )}
      {title === "Delete" && (
        <button
          type="button"
          className={`inline-flex items-center rounded-md border border-transparent bg-red-100 px-6 py-3 text-base font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-32 px-10`}
          onClick={action}
        >
          {title}
        </button>
      )}
      {title === "Save" && (
        <button
          type="button"
          className={`inline-flex items-center rounded-md border border-transparent bg-green-100 px-6 py-3 text-base font-medium text-green-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-32 px-10`}
          onClick={action}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
