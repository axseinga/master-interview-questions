import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
  selected?: boolean;
};

export const Button = ({ children, handleClick, selected }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`border border-slate-700 rounded-md w-full shadow-md py-2 hover:bg-slate-200 transition-all ${selected ? "bg-slate-800 text-white cursor-not-allowed" : "bg-slate-400"}`}
    >
      {children}
    </button>
  );
};
