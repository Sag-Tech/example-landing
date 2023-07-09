import cn from "classnames";
import type { InputProps } from "~/components/form/InputField/InputField";
import Typo from "~/components/Typo";

function TextareaField({
  id,
  name,
  value,
  required,
  label,
  isError,
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
      <textarea
        onChange={onChange}
        required={required}
        value={value}
        id={id}
        name={name}
        className={cn(
          "w-full h-[120px] mt-1.5 lp:mt-2.5 py-2 px-5 text-blue rounded-[20px] bg-grey border hover:bg-white focus:border-blue/40 focus:bg-white outline-0 transition-all duration-300 resize-none",
          isError ? "border-red" : "border-blue/10"
        )}
      />
    </div>
  );
}

export default TextareaField;
