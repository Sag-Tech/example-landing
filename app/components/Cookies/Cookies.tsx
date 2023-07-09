import React, { useState } from "react";
import { useFetcher, useLocation } from "@remix-run/react";
import cn from "classnames";
import Typo from "~/components/Typo";
import Button from "~/components/Button";
import { PAGE_PRIVACY_POLICY } from "~/constants/paths";

function Cookies() {
  const [isHidden, setHidden] = useState<boolean>(false);
  const { pathname, search } = useLocation();
  const fetcher = useFetcher();

  return (
    <div
      className={cn(
        "cookies-banner fixed bottom-0 left-0 right-0  py-5 bg-white z-[100] transition-transform",
        isHidden && "translate-y-full"
      )}
    >
      <div
        className="flex flex-col lp:flex-row justify-center items-center mx-auto gap-y-2.5 gap-x-5 lp:max-w-full
      text-center"
      >
        <Typo tag="p" className="max-w-[225px] lp:max-w-full">
          By continuing to use this website you agree to our
          <a
            rel="noreferrer"
            target="_blank"
            className="underline ml-1.5"
            href={PAGE_PRIVACY_POLICY}
          >
            Cookie Policy
          </a>
        </Typo>
        <fetcher.Form method="post" action="/hide-banner">
          <input hidden name="redirectUrl" value={pathname + search} readOnly />
          <Button
            onClick={() => setHidden(true)}
            type="submit"
            className="bg-none bg-green500 !py-2.5 !px-5"
          >
            <span className="text-sm uppercase font-medium">Accept</span>
          </Button>
        </fetcher.Form>
      </div>
    </div>
  );
}

export default Cookies;
