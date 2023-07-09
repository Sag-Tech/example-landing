import cn from "classnames";
import React, { ChangeEventHandler } from "react";
import Typo from "~/components/Typo";

export type InputProps = {
  id: string;
  name: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean;
  isError?: boolean;
};

function InputField({
  isError,
  required,
  id,
  name,
  label,
  type,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id}>
          <Typo
            tag="div"
            tagStyles="h6"
            className="text-sm lp:text-base leading-5 opacity-60"
          >
            {label}
          </Typo>
        </label>
      )}
      <input
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        required={required}
        className={cn(
          "w-full h-10 mt-0.5 lp:mt-1.5 py-2 px-5 text-blue rounded-[20px] bg-grey border hover:bg-white focus:border-blue/40 focus:bg-white outline-0 transition-all duration-300",
          isError ? "border-red" : "border-blue/10"
        )}
      />
    </div>
  );
}

export default InputField;
