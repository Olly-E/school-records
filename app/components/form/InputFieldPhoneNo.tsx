"use client";
import { Controller, FieldError, UseControllerProps } from "react-hook-form";
import { CountryCode } from "libphonenumber-js/core";
import PhoneInput from "react-phone-number-input";
import clsx from "clsx";
import { Label } from "../elements/Label";
import { ErrorMessage } from "../elements/ErrorMessage";

type InputFieldPhoneNoProps = {
  label?: string;
  className?: string;
  hasError: FieldError | undefined;
  defaultCountry?: CountryCode | undefined;
  errorMessage?: string | undefined;
  isRequired?: boolean;
} & UseControllerProps;

export const InputFieldPhoneNo: React.FC<InputFieldPhoneNoProps> = ({
  label,
  defaultValue,
  className,
  defaultCountry = "NG",
  isRequired,
  control,
  hasError,
  errorMessage,
  name,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <div>
            {!!label && (
              <Label htmlFor={name} isRequired={isRequired}>
                {label}
              </Label>
            )}
            <PhoneInput
              className={clsx(
                "bg-white h-10 w-full appearance-none rounded-[4px] border font-WorkSans border-[#d0d3d4] outline-none px-4  focus-within:border-primary-200 placeholder:text-gray-250",
                hasError && "border-red-500 outline-none",
                className
              )}
              defaultCountry={defaultCountry}
              {...field}
              value={defaultValue}
              onChange={(newValue) => field.onChange(newValue)}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </div>
        )}
      />
    </>
  );
};
