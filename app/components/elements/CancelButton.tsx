import React from "react";
import clsx from "clsx";
import { Button } from "./Button";

interface CancelButtonProp {
  handleClick: () => void;
  className: string;
}
export const CancelButton = ({ handleClick, className }: CancelButtonProp) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        "flex items-center justify-center border-black-state border",
        className
      )}
    >
      <div className="">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.43537 8.02082L6.37124 4.95669L9.43537 1.89256C9.82193 1.506 9.82193 0.864895 9.43537 0.478343C9.04882 0.0917913 8.40771 0.0917913 8.02116 0.478343L4.95703 3.54247L1.8929 0.478343C1.50635 0.0917913 0.86524 0.0917913 0.478688 0.478343C0.0921366 0.864895 0.0921366 1.506 0.478688 1.89256L3.54282 4.95669L0.478688 8.02082C0.0921363 8.40737 0.0921366 9.04848 0.478688 9.43503C0.86524 9.82158 1.50635 9.82158 1.8929 9.43503L4.95703 6.3709L8.02116 9.43503C8.40771 9.82158 9.04882 9.82158 9.43537 9.43503C9.82193 9.04848 9.82193 8.40737 9.43537 8.02082Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>
    </button>
  );
};
