import React, { ComponentPropsWithoutRef } from "react";

interface FormControlProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  wrapperClassName?: string;
  labelClassName?: string;
  helperText?: string;
  helperTextClassName?: string;
  hasError?: boolean;
  errorText?: string;
}

const FormControl = ({
  label,
  wrapperClassName,
  labelClassName,
  helperTextClassName,
  helperText,
  hasError,
  errorText,
  ...props
}: FormControlProps) => {
  return (
    <div
      className={`${props.disabled && "opacity-70"} ${wrapperClassName || ""}`}
    >
      <label className={labelClassName || ""} htmlFor={props.name || ""}>
        {label}
      </label>
      <input
        className={`w-full bg-indigo-600/15 dark:bg-violet-950/50 rounded p-2 mb-2 dark:[&::-webkit-calendar-picker-indicator]:invert ${
          hasError && "border-red-700 dark:border-red-400 border"
        }`}
        {...props}
      />
      {helperText && (
        <p
          className={
            "text-xs text-indigo-900/60 dark:text-gray-400 " +
              helperTextClassName || ""
          }
        >
          {helperText}
        </p>
      )}
      {errorText && hasError && (
        <p className={"text-xs text-red-700 dark:text-red-400 "}>{errorText}</p>
      )}
    </div>
  );
};

export default FormControl;
