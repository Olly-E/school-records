import { FieldError } from "react-hook-form";
import React from "react";
import clsx from "clsx";

import { ErrorMessage } from "../elements/ErrorMessage";
import { FormatMoney } from "@/app/utils/constants";

interface MoneyInputProps {
  onChange: (value: string) => void;
  value: string;
  className: string;
  hasError: FieldError | undefined;
  errorMessage: string | undefined;
  placeholder?: string;
  border?: string;
}

export const InputMoney: React.FC<MoneyInputProps> = ({
  hasError,
  onChange,
  value,
  className,
  errorMessage,
  placeholder,
  border,
}) => {
  return (
    <div>
      <input
        className={clsx(
          className,
          "h-[38px] w-full rounded-[4px] border border-gray-150 px-4 font-WorkSans outline-none placeholder:text-sm disabled:bg-gray-100",
          hasError && "border-red-500"
        )}
        placeholder={placeholder}
        style={{ border: border }}
        type="text"
        value={FormatMoney(value)}
        onChange={(e) => onChange(FormatMoney(e?.target?.value))}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
