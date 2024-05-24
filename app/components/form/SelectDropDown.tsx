import React from "react";
import clsx from "clsx";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";

interface SelectDropDownProps {
  options: { name: string; id: string }[];
  handleSelect: (data: { name: string; id: string }) => void;
  selectedOption: { name: string; id: string };
  hasError?: boolean;
}

const SelectDropDown = ({
  options,
  handleSelect,
  selectedOption,
  hasError,
}: SelectDropDownProps) => {
  const {
    ref,
    isComponentVisible,
    dropDownButtonRef,
    setIsComponentVisible,
    handleClickOnDropDownButton,
  } = useComponentVisible();

  return (
    <div ref={ref} className="relative h-full">
      <button
        ref={dropDownButtonRef}
        onClick={handleClickOnDropDownButton}
        type="button"
        className={clsx(
          "flex items-center w-full h-[38px] rounded-[4px] justify-between px-4",
          hasError ? "border border-red-500" : "border"
        )}
      >
        <p className="text-sm">{selectedOption?.name || "Select Options"}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
          ></path>
        </svg>
      </button>
      <div
        className={clsx(
          " max-w-[228px] w-[228px] px-[21px] top-10 z-10 rounded-[5px] bg-white absolute transition-all mt-2 ml-2 overflow-hidden",
          isComponentVisible
            ? "py-[26px] max-h-[290px] border overflow-y-auto"
            : "max-h-0 py-0 border-opacity-0 border-0"
        )}
      >
        <div className="text-sm">
          {options?.map((data, index) => {
            return (
              <button
                onClick={() => {
                  handleSelect(data);
                  setIsComponentVisible(false);
                }}
                type="button"
                key={data.id}
                className={clsx(
                  "flex items-center w-full gap-4",
                  index < options.length - 1 && "border-b pb-4",
                  index > 0 && "pt-4"
                )}
              >
                <p className="text-sm">{data.name}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectDropDown;
