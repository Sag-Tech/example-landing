import cn from "classnames";
import Typo from "~/components/Typo";
import type { InputProps } from "~/components/form/InputField/InputField";
import { PAGE_PRIVACY_POLICY } from "~/constants/paths";

function Checkbox({
  id,
  type,
  value,
  checked,
  onChange,
  isError,
}: InputProps & { checked: boolean }) {
  return (
    <label className="flex gap-2.5" htmlFor={id}>
      <input
        id={id}
        className="hidden"
        type={type}
        onChange={onChange}
        checked={checked}
        value={value}
      />
      <span
        className={cn(
          "flex justify-center items-center flex-shrink-0 w-3.5 h-3.5 rounded-[7px] border transition " +
            "duration-300 border-blue/10 cursor-pointer mt-1.5",
          { "dp:hover:bg-green500/20 dp:hover:border-[#a4e1d3]": !checked },
          { "bg-[#18C9A1] border-0": checked && !isError },
          { "bg-red border-0": isError }
        )}
      >
        <img width="10" height="8" src="/svg/check.svg" alt="check" />
      </span>

      <div>
        <Typo tag="p" className="text-sm lp:text-base leading-5">
          Sending this request, I agree to the
          <a
            rel="noreferrer"
            target="_blank"
            className="underline hover:no-underline px-1"
            href={PAGE_PRIVACY_POLICY}
          >
            Privacy Policy
          </a>
          and processing my personal data.
        </Typo>
      </div>
    </label>
  );
}

export default Checkbox;
